import { NextRequest } from "next/server";
import { comment } from "../data";
import { redirect } from "next/navigation";









export async  function GET(_request :Request , {params} : {params: {id:string}}){
 const {id} = await params
  const comments = comment.find((commen) => commen.id === parseInt(id))
  if (!comments) {
    return redirect('/comments')
  }
   return Response.json(comments);

}

export async function PATCH(request:Request , {params} : {params : {id :string}}) {
   const body = await request.json()
   const {text} = body
   const {id} = await params
    
   const index = comment.findIndex(f => f.id === parseInt(id))

   comment[index].text = text

   return Response.json(comment[index])
}


export async function DELETE(request : Request , {params} : {params : {id:string}}) {
   const {id} = await params

   const index = comment.findIndex(f => f.id === parseInt(id))

   const deletComment = comment[index]
   comment.splice(index , 1)

   return Response.json(deletComment)
}