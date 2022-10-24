/*
  Warnings:

  - Added the required column `quantity` to the `ProductsOnOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productsOnOrder` ADD COLUMN `quantity` INTEGER NOT NULL;
