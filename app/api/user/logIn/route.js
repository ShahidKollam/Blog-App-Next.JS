import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import User from "@/lib/models/UserModel";
import { NextResponse } from "next/server";
 
export async function POST(req) {
    try {
        const { email, password } = await req.json();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "15d",
        });

        const cookie = serialize("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 15 * 24 * 60 * 60, // 15 days
            sameSite: "strict",
            path: "/",
        });

        const headers = new Headers();
        headers.append("Set-Cookie", cookie);

        // Remove password from the user object before returning
        const { password: _, ...userWithoutPassword } = user._doc;

        return NextResponse.json(userWithoutPassword, {
            status: 200,
            headers,
        });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
