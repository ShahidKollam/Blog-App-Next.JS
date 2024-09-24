// import mongoose from "mongoose";

// export const connectDB = async()=>{
//     await mongoose.connect(process.env.MONGODB_URL)
//     console.log("DB connection established");
    
// }

// db.js
import mongoose, { Error } from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    // Already connected
    console.log('Already connected to the database.');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
    });
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Database connection error:', Error);
    throw error;
  }
};

export default connectDB;
