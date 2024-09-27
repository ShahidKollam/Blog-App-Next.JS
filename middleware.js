import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
    const token = req.cookies["jwt"]; // Change this line for cookie access

    if (!token) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Store user data in req for later use if needed

        return NextResponse.next();
    } catch (error) {
        console.error("JWT verification failed:", error.message);
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }
}

export const config = {
    matcher: ["/admin"],
};
