"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { User } from "@/app/UserType";
import axios from "axios";
import { useRouter } from "next/navigation";

import Link from "next/link";

const Tablepage = () => {
  const [Alluser, setAll] = useState<User[]>();
  const router = useRouter();
  const ReadData = async () => {
    const respone = await axios.get("/api/users");

    setAll(respone.data.user);
  };
  useEffect(() => {
    ReadData();
  }, []);

  function HandleEdit(id?: number) {
    if (!id) {
      return alert("undefine Error");
    }
    router.push(`/ui/Form/${id}`);
  }

  async function HandleDelete(id?: number) {
    if (!id) {
      return alert("Id is undefine");
    }
    try {
      await axios.delete(`/api/${id}`);
      setAll((prev) => prev?.filter((user) => user.Id !== id));
    } catch (error) {
      alert("delete failed");
    }
  }
  return (
    <div className="p-30">
      <Table className="border p-3 w-1xl">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-lg">Name</TableHead>
            <TableHead className="w-lg">Email</TableHead>
            <TableHead className="w-lg">Address</TableHead>
            <TableHead className="text-start bg-amber-300 w-lg">Age</TableHead>
            <TableHead className="text-start w-lg">CreatedAt</TableHead>
            <TableHead className="text-start w-md ">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Alluser?.map((users) => (
            <TableRow key={users.Id}>
              <TableCell className="font-medium">{users.Name}</TableCell>
              <TableCell>{users.Email}</TableCell>
              <TableCell>{users.Address}</TableCell>
              <TableCell className="text-left">{users.Age}</TableCell>
              <TableCell className="text-left">
                {new Date(users.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="flex justify-end space-x-2">
                <button
                  className="bg-blue-500 rounded-sm text-white w-8 py-1  "
                  onClick={() => HandleEdit(users?.Id)}
                >
                  {" "}
                  ✏
                </button>{" "}
                <button
                  className="bg-red-500 text-white rounded-sm w-8 p-1"
                  onClick={() => HandleDelete(users?.Id)}
                >
                  🗑
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-40 underline underline-offset-2">
        <Link href="/ui/Form">Go back Form</Link>
      </div>
    </div>
  );
};

export default Tablepage;
