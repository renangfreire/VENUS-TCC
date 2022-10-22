/*
  Warnings:

  - Added the required column `bairro` to the `usersAddresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usersAddresses` ADD COLUMN `bairro` VARCHAR(191) NOT NULL;
