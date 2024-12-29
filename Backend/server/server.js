// Import required modules and configurations
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import mongoose from "mongoose"
import authRouter from './src/routes/authRoutes.js';

// Initialize RedisStore from connect-redis

mongoose.connect("mongodb+srv://dsaic:dsaic123@cluster0.psei7.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB:', err));


// Load environment variables from .env
dotenv.config();

// Create an Express application
const app = express();

// Configure Express middleware
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
  res.send('api is working')
})

app.use('/api/user', authRouter);

app.listen(3000, ()=>{
  console.log('Server is running on port 3000')
})