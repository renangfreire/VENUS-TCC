/*
  Warnings:

  - You are about to drop the column `productColorsId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `productSizesId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `productsId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `statusPag` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `stockId` on the `products` table. All the data in the column will be lost.
  - Added the required column `statusOrder` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorFrete` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorTotal` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_productColorsId_fkey`;

-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_productSizesId_fkey`;

-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_productsId_fkey`;

-- AlterTable
ALTER TABLE `orders` DROP COLUMN `productColorsId`,
    DROP COLUMN `productSizesId`,
    DROP COLUMN `productsId`,
    DROP COLUMN `statusPag`,
    DROP COLUMN `valor`,
    ADD COLUMN `statusOrder` VARCHAR(191) NOT NULL,
    ADD COLUMN `valorFrete` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `valorTotal` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `stockId`;

-- CreateTable
CREATE TABLE `Payment_details` (
    `id` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(65, 30) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `orderId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Payment_details_orderId_key`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductsOnOrder` (
    `id` VARCHAR(191) NOT NULL,
    `ordersId` VARCHAR(191) NOT NULL,
    `productsId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ColorsOnOrder` (
    `id` VARCHAR(191) NOT NULL,
    `ordersId` VARCHAR(191) NULL,
    `productColorsId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SizesOnOrder` (
    `id` VARCHAR(191) NOT NULL,
    `ordersId` VARCHAR(191) NOT NULL,
    `productSizesId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Payment_details` ADD CONSTRAINT `Payment_details_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsOnOrder` ADD CONSTRAINT `ProductsOnOrder_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsOnOrder` ADD CONSTRAINT `ProductsOnOrder_ordersId_fkey` FOREIGN KEY (`ordersId`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ColorsOnOrder` ADD CONSTRAINT `ColorsOnOrder_ordersId_fkey` FOREIGN KEY (`ordersId`) REFERENCES `orders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ColorsOnOrder` ADD CONSTRAINT `ColorsOnOrder_productColorsId_fkey` FOREIGN KEY (`productColorsId`) REFERENCES `productColors`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SizesOnOrder` ADD CONSTRAINT `SizesOnOrder_ordersId_fkey` FOREIGN KEY (`ordersId`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SizesOnOrder` ADD CONSTRAINT `SizesOnOrder_productSizesId_fkey` FOREIGN KEY (`productSizesId`) REFERENCES `productSizes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
