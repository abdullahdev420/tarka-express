import { connectionStr } from "@/app/lib/db";
import { UserSchema } from "@/app/lib/UserModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();

    if (!payload.email || !payload.password) {
      return NextResponse.json({ success: false, message: "Email and password are required" });
    }

    await mongoose.connect(connectionStr);

    const user = await UserSchema.findOne({
      email: payload.email.toLowerCase(),
      password: payload.password,
    });

    if (user) {
      return NextResponse.json({ success: true, result: user });
    } else {
      return NextResponse.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong" });
  }
}
