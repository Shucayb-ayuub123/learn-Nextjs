"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import type { User } from "@/app/UserType";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
const Formpage = () => {
  const [user, setUser] = useState<User>({
    Name: "",
    Email: "",
    Age: "",
    Address: "",
    createdAt: new Date(),
  });

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        user,
      );

      alert(response.data.message || "User created Seccusfully");
    } catch (error: any) {
      alert(error.response?.data?.error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col mt-20 items-center">
      <form
        action=""
        className="w-5/12 flex flex-col border-[0.5px] shadow p-10 space-y-3 rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex flex-col space-y-2">
          <label htmlFor="">Name</label>
          <Input
            value={user?.Name}
            onChange={(e) => setUser({ ...user, Name: e.target.value })}
          />
        </div>
        <div className="w-full flex flex-col space-y-1">
          <label htmlFor="">Email</label>

          <Input
            value={user?.Email}
            autoComplete="off"
            onChange={(e) => setUser({ ...user, Email: e.target.value })}
          />
        </div>
        <div className="w-full flex flex-col space-y-1">
          <label htmlFor="">Address</label>
          <Input
            value={user?.Address}
            onChange={(e) => setUser({ ...user, Address: e.target.value })}
          />
        </div>
        <div className="w-full flex flex-col space-y-2">
          <label htmlFor="">Age</label>
          <Select
            value={user.Age}
            onValueChange={(value) => setUser({ ...user, Age: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Age" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="18-24">18-24</SelectItem>
                <SelectItem value="24-29">24-29</SelectItem>
                <SelectItem value="30-34">30-24</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-center space-x-9">
          <button
            className="bg-blue-600 px-4 py-1 text-white rounded-md"
            type="submit"
          >
            submit
          </button>
          <button className="bg-red-600 px-4 py-1 text-white rounded-md">
            cancel
          </button>
        </div>
        <Link href="/ui/table" className="text-blue-500 font-thin">
          Table
        </Link>
      </form>
    </div>
  );
};

export default Formpage;
