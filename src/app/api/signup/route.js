import { connectionStr } from "@/app/lib/db";
import { UserSchema } from "@/app/lib/UserModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();

  await mongoose.connect(connectionStr);

  const user = new UserSchema(payload);

  const result = await user.save();

  return NextResponse.json({ result });
}
