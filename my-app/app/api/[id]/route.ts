import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = Number((await params).id);
  if (!id) {
    return NextResponse.json({ error: "Missing values" }, { status: 400 });
  }
  const user = await prisma.user.findUnique({
    where: { Id: id },
  });
  console.log(user);
  return NextResponse.json({ user }, { status: 200 });
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = Number((await params).id);
  if (!id) {
    return NextResponse.json({ error: "Missing values" }, { status: 400 });
  }

  const { Name, Email, Address, Age } = await req.json();

  const user = await prisma.user.update({
    where: {
      Id: id,
    },

    data: {
      Name,
      Email,
      Address,
      Age,
    },
  });

  return NextResponse.json({ message : "Updated success" }, { status: 200 });
}

export async function DELETE(req:Request , {params} : {params: Promise<{id : string}>}) {
  const id = Number((await params).id)

  const user = await prisma.user.delete({
    where : {Id : id}
  })

  return NextResponse.json({message : "User deleted"} , {status:200})
}