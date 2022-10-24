/*
  Warnings:

  - You are about to drop the `colorsOnOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sizesOnOrder` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `colorsId` to the `productsOnOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sizesId` to the `productsOnOrder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `colorsOnOrder` DROP FOREIGN KEY `ColorsOnOrder_ordersId_fkey`;

-- DropForeignKey
ALTER TABLE `colorsOnOrder` DROP FOREIGN KEY `ColorsOnOrder_productColorsId_fkey`;

-- DropForeignKey
ALTER TABLE `sizesOnOrder` DROP FOREIGN KEY `SizesOnOrder_ordersId_fkey`;

-- DropForeignKey
ALTER TABLE `sizesOnOrder` DROP FOREIGN KEY `SizesOnOrder_productSizesId_fkey`;

-- AlterTable
ALTER TABLE `productsOnOrder` ADD COLUMN `colorsId` VARCHAR(191) NOT NULL,
    ADD COLUMN `sizesId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `admin` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE `colorsOnOrder`;

-- DropTable
DROP TABLE `sizesOnOrder`;

-- AddForeignKey
ALTER TABLE `productsOnOrder` ADD CONSTRAINT `ProductsOnOrder_colorsId_fkey` FOREIGN KEY (`colorsId`) REFERENCES `productColors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productsOnOrder` ADD CONSTRAINT `ProductsOnOrder_sizesId_fkey` FOREIGN KEY (`sizesId`) REFERENCES `productSizes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
