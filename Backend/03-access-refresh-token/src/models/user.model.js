import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, 'Name must be at least 3 characters long'],
    maxLength: [30, 'Name must be at most 30 characters long'],
  }, 
  email:{
    type: String,
    required: true,
    unique: true,
    matchMedia: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },  
  passwordHash: {
    type: String,
    required: true,
    unique: true,
  },
  refreshToken: {
    type: String,
    default: null,
  },
});

const User = mongoose.model('User', userSchema);
export default User;
