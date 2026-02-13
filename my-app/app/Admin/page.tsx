import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { LayoutDashboard, Monitor, PrinterIcon, Cpu, RouterIcon, SquarePen,Trash2  } from "lucide-react";

const page = () => {
  return (
    <div className="px-4 py-4">
      
      <div className="flex w-12/12 items-center justify-between border-b-[0.5px] pb-4 border-gray-400">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">
            overview of all IT asset in your organization
          </p>
        </div>

        <div className="bg-white w-1/12 p-2 rounded-md">IT Admin</div>
      </div>
       <div className="w-full flex justify-end">
            <Button className="mt-3 left-0">Add user</Button>

       </div>
      <div className="mt-7 grid grid-cols-4 gap-4">
        <Card className="w-full">
          <div className="flex items-center px-3">
            <div className="space-y-3">
              <CardTitle className="text-2xl">42</CardTitle>
              <CardDescription>Computers</CardDescription>
              <CardDescription>12 with expired antivirus</CardDescription>
            </div>

            <div className="ml-9 ">
              <Monitor size={40} />
            </div>
          </div>
        </Card>
        <Card className="w-full">
          <div className="flex items-center px-3">
            <div className="space-y-3">
              <CardTitle className="text-2xl">42</CardTitle>
              <CardDescription>printers</CardDescription>
              <CardDescription>5 color, 13 black & white</CardDescription>
            </div>

            <div className="ml-9 ">
              <PrinterIcon size={40} />
            </div>
          </div>
        </Card>
        <Card className="w-full">
          <div className="flex items-center px-3">
            <div className="space-y-3">
              <CardTitle className="text-2xl">42</CardTitle>
              <CardDescription>Routers</CardDescription>
              <CardDescription>All currently operational</CardDescription>
            </div>

            <div className="ml-9 ">
              <RouterIcon size={40} />
            </div>
          </div>
        </Card>
        <Card className="w-full">
          <div className="flex items-center px-3">
            <div className="space-y-3">
              <CardTitle className="text-2xl">42</CardTitle>
              <CardDescription>Other devices</CardDescription>
              <CardDescription>Switches, servers, etc.</CardDescription>
            </div>

            <div className="ml-9 ">
              <Cpu size={40} />
            </div>
          </div>
        </Card>
      </div>
       
      <div className="mt-7">
        <Table className="bg-white shadow-md shadow-gray-300">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-100  font-bold text-xl px-3 py-3">Recent IT Assets</TableHead>
              
            </TableRow>
          </TableHeader>
          <TableHeader>
            <TableRow className="py-4 bg-gray-50">
              <TableHead className="w-100 font-semibold">Asset Type</TableHead>
              <TableHead className="font-semibold">Name/Model</TableHead>
              <TableHead className="font-semibold">Location</TableHead>
              <TableHead className="text-right font-semibold">Status</TableHead>
              <TableHead className="text-right font-semibold">Last Updated</TableHead>
              <TableHead className="text-right font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right space-x-4"><button className=" bg-blue-500 border-[1]  p-1 rounded-2xl"><SquarePen size={19} color="white" ></SquarePen></button><button className=" bg-red-600 border-[1]  p-1 rounded-2xl"><Trash2 size={19} color="white"></Trash2></button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
