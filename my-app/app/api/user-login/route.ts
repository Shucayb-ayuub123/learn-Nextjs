import pool from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const { username, password} = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    const users = await pool.query("SELECT * FROM users where username = $1", [
      username,
    ]);

    if (users.rows.length == 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const user = users.rows[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 },
      );
    }

    const token = jwt.sign(
      { username: user.username, admin: user.role },
      process.env.JW_SECRET!,
      { expiresIn: "1d" },
    );

    const response = NextResponse.json({ message: "Login successfull" } , {});
    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV == "development",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
