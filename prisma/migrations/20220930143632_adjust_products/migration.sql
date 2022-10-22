/*
  Warnings:

  - The primary key for the `productColors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `productColorsId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `productSizesId` on the `products` table. All the data in the column will be lost.
  - The primary key for the `productSizes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `Products_productColorsId_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `Products_productSizesId_fkey`;

-- AlterTable
ALTER TABLE `productColors` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `color` ENUM('PRETO', 'ROSA', 'BRANCO', 'VERDE', 'AZUL') NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `products` DROP COLUMN `productColorsId`,
    DROP COLUMN `productSizesId`;

-- AlterTable
ALTER TABLE `productSizes` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `Size` ENUM('P', 'M', 'G', 'GG', 'XG') NULL,
    ADD PRIMARY KEY (`id`);
