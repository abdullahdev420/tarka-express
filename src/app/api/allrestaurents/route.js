import { connectionStr } from "@/app/lib/db";
import { restaurentSchema } from "@/app/lib/RestaurentModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function GET(){
  await mongoose.connect(connectionStr)
  const data = await restaurentSchema.find()
  console.log(data);
  

  return NextResponse.json({result:data,success:true})
}