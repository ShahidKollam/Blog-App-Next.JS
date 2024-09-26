// app/api/user/signup/route.js
import bcrypt from "bcryptjs";
import connectDB from "@/lib/config/db.js";
import User from "@/lib/models/UserModel.js";
import { NextResponse } from "next/server";
 
// Environment variable for bcrypt salt rounds
const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;

export async function POST(req) {
    try {
        await connectDB();

        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "Unable to register user" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, parseInt(SALT_ROUNDS, 10));

        const newUser = new User({ username: name, email, password: hashedPassword });
        await newUser.save();
        console.log("user console", newUser);

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error during user registration:", error.message);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
