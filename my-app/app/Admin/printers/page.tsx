import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex w-12/12 items-center justify-between border-b-[0.5px] pb-4 border-gray-400">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">Printers</h1>
          <p className="text-sm text-gray-500">
            Manage of all Printers asset in your organization
          </p>
        </div>

        <div className="bg-white w-1/12 p-2 rounded-md">IT Admin</div>
      </div>

      <div className="mt-7">
        <Table className="bg-white shadow-md shadow-gray-300 rounded-md">
          <TableCaption>A list of yaour recent invoices.</TableCaption>

          <TableHeader>
            <TableRow className="h-14">
              <TableHead> <h1 className="text-xl font-bold">All computers</h1></TableHead>
              <TableHead className="text-end" colSpan={20}>
                <Button className="bg-blue-700 hover:bg-blue-600 active:bg-blue-500">+ Add New Printter</Button>
              </TableHead>
            </TableRow>
            <TableRow className="py-4 bg-gray-50">
              <TableHead className="font-semibold">Printer Name</TableHead>
              <TableHead className="font-semibold">Brand</TableHead>
              <TableHead className="font-semibold">Model</TableHead>
              <TableHead className="text-right font-semibold">Scanner</TableHead>
              <TableHead className="text-right font-semibold">
                Color
              </TableHead>
              <TableHead className="text-right font-semibold">
                Location
              </TableHead>
              <TableHead className="text-right font-semibold">
              Status
              </TableHead>
              <TableHead className="text-right font-semibold">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right space-x-4">
                <button className=" bg-blue-500 border-[1]  p-1 rounded-2xl">
                  <SquarePen size={19} color="white"></SquarePen>
                </button>
                <button className=" bg-red-600 border-[1]  p-1 rounded-2xl">
                  <Trash2 size={19} color="white"></Trash2>
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right space-x-4">
                <button className=" bg-blue-500 border-[1]  p-1 rounded-2xl">
                  <SquarePen size={19} color="white"></SquarePen>
                </button>
                <button className=" bg-red-600 border-[1]  p-1 rounded-2xl">
                  <Trash2 size={19} color="white"></Trash2>
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right space-x-4">
                <button className=" bg-blue-500 border-[1]  p-1 rounded-2xl">
                  <SquarePen size={19} color="white"></SquarePen>
                </button>
                <button className=" bg-red-600 border-[1]  p-1 rounded-2xl">
                  <Trash2 size={19} color="white"></Trash2>
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right space-x-4">
                <button className=" bg-blue-500 border-[1]  p-1 rounded-2xl">
                  <SquarePen size={19} color="white"></SquarePen>
                </button>
                <button className=" bg-red-600 border-[1]  p-1 rounded-2xl">
                  <Trash2 size={19} color="white"></Trash2>
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
