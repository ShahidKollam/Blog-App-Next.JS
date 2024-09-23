import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("DB connection established");
    
}