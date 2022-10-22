/*
  Warnings:

  - You are about to drop the `payment_details` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `payment_details` DROP FOREIGN KEY `payment_details_orderId_fkey`;

-- DropTable
DROP TABLE `payment_details`;

-- CreateTable
CREATE TABLE `Payment_details` (
    `id` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(65, 30) NOT NULL,
    `statusPag` ENUM('PENDING', 'INPROCESS', 'REJECTED', 'CANCELED', 'APPROVED') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `orderId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Payment_details_orderId_key`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Payment_details` ADD CONSTRAINT `Payment_details_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
