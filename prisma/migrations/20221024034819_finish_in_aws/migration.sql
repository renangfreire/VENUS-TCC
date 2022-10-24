/*
  Warnings:

  - You are about to drop the `payment_details` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productsOnOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `payment_details` DROP FOREIGN KEY `Payment_details_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `productsOnOrder` DROP FOREIGN KEY `ProductsOnOrder_colorsId_fkey`;

-- DropForeignKey
ALTER TABLE `productsOnOrder` DROP FOREIGN KEY `ProductsOnOrder_ordersId_fkey`;

-- DropForeignKey
ALTER TABLE `productsOnOrder` DROP FOREIGN KEY `ProductsOnOrder_productsId_fkey`;

-- DropForeignKey
ALTER TABLE `productsOnOrder` DROP FOREIGN KEY `ProductsOnOrder_sizesId_fkey`;

-- DropTable
DROP TABLE `payment_details`;

-- DropTable
DROP TABLE `productsOnOrder`;

-- CreateTable
CREATE TABLE `Payment_details` (
    `id` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(65, 30) NOT NULL,
    `statusPag` ENUM('PENDING', 'INPROCESS', 'REJECTED', 'CANCELED', 'APPROVED') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `orderId` VARCHAR(191) NOT NULL,
    `installments` INTEGER NULL,
    `installment_amount` DOUBLE NULL,
    `methodPayment` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Payment_details_orderId_key`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductsOnOrder` (
    `id` VARCHAR(191) NOT NULL,
    `ordersId` VARCHAR(191) NOT NULL,
    `productsId` VARCHAR(191) NOT NULL,
    `colorsId` VARCHAR(191) NOT NULL,
    `sizesId` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Payment_details` ADD CONSTRAINT `Payment_details_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsOnOrder` ADD CONSTRAINT `ProductsOnOrder_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsOnOrder` ADD CONSTRAINT `ProductsOnOrder_ordersId_fkey` FOREIGN KEY (`ordersId`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsOnOrder` ADD CONSTRAINT `ProductsOnOrder_colorsId_fkey` FOREIGN KEY (`colorsId`) REFERENCES `productColors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsOnOrder` ADD CONSTRAINT `ProductsOnOrder_sizesId_fkey` FOREIGN KEY (`sizesId`) REFERENCES `productSizes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
