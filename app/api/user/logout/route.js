// app/api/auth/logout/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
    // Clear the JWT token cookie
    const response = NextResponse.json({ message: "Logout successful" });
    response.cookies.set("jwt", "", {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        expires: new Date(0), // Set expiration to the past to delete the cookie
    });

    return response;
}
