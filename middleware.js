import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
    //const token = req.cookies.get("jwt")?.value;

    // if (!token) {
    //     return NextResponse.redirect(new URL("/sign-in", req.url));
    // }

    try {
      //  const decoded = jwt.verify(token, process.env.JWT_SECRET);

        return NextResponse.next();
    } catch (error) {
        console.error("JWT verification failed:", error.message);
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/", "/"],
};
 