import { NextRequest } from "next/server";
import { comment  } from "../comments/data";

// export function GET() {
//   return Response.json(comment);
// }

export async function POST(reques: Request) {
  const comments = await reques.json();

  const Newcomment = {
    id: comment.length + 1,
    text: comments.text,
  };

  comment.push(Newcomment);
  return new Response(JSON.stringify(Newcomment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

export async function GET(request:NextRequest) {
   const searchparams = request.nextUrl.searchParams
   const query = searchparams.get('query')

   const filteredComment = query ? comment.filter(f => f.text.includes(query)) : comment

   return Response.json(filteredComment)

}