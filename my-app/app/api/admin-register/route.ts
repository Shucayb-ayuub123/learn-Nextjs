import pool from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
export async function POST(request: Request) {
  try {
    const { username, password, role } = await request.json();

    if (!username || !password || !role) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    const user = await pool.query("SELECT * FROM users where username = $1", [
      username,
    ]);

    if (user.rows.length > 0) {
      return NextResponse.json(
        { message: "Admin with this email already exists" },
        { status: 409 },
      );
    }

    const hashPass = await bcrypt.hash(password, 10);

    const users = await pool.query(
      "INSERT INTO users (username , password , role) values($1,$2,$3) ",
      [username, hashPass, role],
    );
    return NextResponse.json(
      { message: "Regitered Successfully" },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
