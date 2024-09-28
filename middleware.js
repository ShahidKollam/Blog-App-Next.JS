import { NextResponse } from "next/server";
import { jwtVerify } from "jose"; // Use 'jose' for JWT verification

export async function middleware(req) {
    const cookie = req.cookies.get("jwt");

    // Check if cookie is undefined or not and extract the token
    if (!cookie || !cookie.value) {
        console.log("No token found, redirecting to /sign-in");
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    const token = cookie.value; // Extract the JWT string from the cookie

    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        // console.log(payload);

        // Check if the user is an admin 
        if (payload.isAdmin === true) {
            console.log("Admin === ", payload.isAdmin);

            return NextResponse.next(); // Allow access to the admin route
        } else {
            return NextResponse.redirect(new URL("/", req.url)); // Redirect if not an admin
        }
    } catch (error) {
        console.error("JWT verification failed:", error.message);
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }
}

export const config = {
    matcher: ["/admin/:path*"], // Match admin routes
};
