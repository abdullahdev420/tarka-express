import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/FoodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await mongoose.connect(connectionStr);
  const { id } = params;

  const foods = await foodSchema.find({ restaurentId: id });
  return NextResponse.json({ success: true, result: foods });
}
