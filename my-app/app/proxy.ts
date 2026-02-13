import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
const PublicPath = [
  "/Login",
  "/Admin",
  "/api/admin-register",
  "/api/user-login",
  "/Users",
];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (PublicPath.some((path) => path.startsWith(pathname))) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  try {
    const decode:any = jwt.verify(token, process.env.JW_SECRET!);

    if (decode.role == "admin" && pathname.startsWith("/Admin")) {
      return NextResponse.redirect(new URL("/Admin/dashboard"));
    }

    if (decode.role == "user" && pathname.startsWith("/Admin")) {
      return NextResponse.redirect(new URL("/User/dashboard"));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }
}

export const config = {
  matcher: ["/Admin/:path", "/User/:path"],
};
