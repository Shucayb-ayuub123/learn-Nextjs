import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export function GET(request:NextRequest) {
    const requestHeader = new Headers(request.headers)
    console.log(requestHeader.get("Authorization"))
    const theme = request.cookies.get("theme")
    console.log(theme?.name  , theme?.value)
    return new Response("Profile Api" , {
        headers : {
            "Content-Type" : "text/html",
            "Set-Cookie" :  "theme=dark"
        }
    })
}