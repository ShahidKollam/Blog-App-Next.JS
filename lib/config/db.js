import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://shahid:shahid123@cluster0.nsmb9.mongodb.net/blog-app')
    console.log("DB connection established");
    
}