import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../schemas/userSchema.js';
import dotenv from 'dotenv';
import axios from "axios"

dotenv.config()
export const register = async (req, res) => {
    const user = req.body;
    console.log(user)

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(user.password, 8);
        console.log(hashedPassword)

        // Create a new user object
        const newUser = new userModel({
            username: user.username,
            email: user.email,
            password: hashedPassword,
            phonenumber: user.phonenumber
        });

        // Save the user to the MongoDB database
        const savedUser = await newUser.save();

        // Generate a JWT token
        const token = jwt.sign(
            { id: savedUser._id},
            process.env.SECRET_KEY,
            { expiresIn: '24h' } // Token expiration time
        );

        // Send success response with the token
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            token,
        });
    } catch (error) {
        console.error(error);

        // Check if the error is a duplicate key error (e.g., unique email or username constraint)
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Username or email already exists',
            });
        }

        // Send generic error response
        res.status(500).json({
            success: false,
            message: 'An error occurred while registering the user',
        });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    // Validate email and password presence
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Email and password are required',
        });
    }

    try {
        // Find user by email
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'No user found with this email',
            });
        }

        // Compare passwords
        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email }, // Payload
            process.env.SECRET_KEY, // Secret key
            { expiresIn: '1h' } // Token expiration
        );

        return res.status(200).json({
            success: true,
            message: 'Log in successful',
            token, // Send the token to the client
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred during login',
        });
    }
};

// Mpesa intergration


export const getAccessToken = async () => {
    const url = `${process.env.MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`;

    const auth = Buffer.from(
        `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
    ).toString('base64');

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });

        return response.data.access_token;
    } catch (error) {
        console.error('Error generating access token:', error);
        throw new Error('Failed to generate access token');
    }
}

export const initiateStkPush = async (req, res) => {
    const { phoneNumber } = req.body;
    const amount = 200; // Fixed registration amount
    const accessToken = await generateAccessToken();
  
    const payload = {
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: Buffer.from(
        `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${new Date()
          .toISOString()
          .slice(0, 19)
          .replace(/[-T:]/g, '')}`
      ).toString('base64'),
      Timestamp: new Date().toISOString().slice(0, 19).replace(/[-T:]/g, ''),
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phoneNumber,
      CallBackURL: 'https://yourdomain.com/api/payment/callback', // Replace with your webhook URL
      AccountReference: 'Registration',
      TransactionDesc: 'Website Registration',
    };
  
    try {
      const response = await axios.post(
        'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error initiating STK push:', error);
      res.status(500).json({ error: 'Failed to initiate payment' });
    }
  };
  
