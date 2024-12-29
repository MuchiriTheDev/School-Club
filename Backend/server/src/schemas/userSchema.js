import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        maxlength: 100,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
        match: [/^\+?[1-9]\d{1,14}$/, 'Please fill a valid phone number'], // E.164 phone number format
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


// Export the model
const userModel = mongoose.models.user || mongoose.model('User', userSchema);

export default userModel