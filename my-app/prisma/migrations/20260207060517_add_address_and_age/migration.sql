/*
  Warnings:

  - Added the required column `Address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Age` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Address" TEXT NOT NULL,
ADD COLUMN     "Age" INTEGER NOT NULL;
