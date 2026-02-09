import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { Name , Email , Address , Age } = await request.json();

    if (!Name || !Email || !Address || !Age) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }
    const user = await prisma.user.create({
      data: { Name, Email, Address, Age },
    });
    return NextResponse.json({ message : "Inserted Succesfully" , user}, { status: 201 });
  } catch (error: any) {
    console.log("error " , error)
    return NextResponse.json(
      { error: "Something went Wrong" },
      { status: 500 },
    );

  }
}
export async function GET() {
  
  const user = await prisma.user.findMany()
  return NextResponse.json({user} , {status : 200})
}