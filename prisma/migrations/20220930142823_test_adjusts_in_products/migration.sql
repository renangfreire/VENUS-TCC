/*
  Warnings:

  - You are about to drop the column `color` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `color`,
    DROP COLUMN `size`,
    ADD COLUMN `productColorsId` INTEGER NULL,
    ADD COLUMN `productSizesId` INTEGER NULL;

-- CreateTable
CREATE TABLE `productColors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_product` VARCHAR(191) NOT NULL,
    `color` ENUM('PRETO', 'ROSA', 'BRANCO', 'VERDE', 'AZUL') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productSizes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_product` VARCHAR(191) NOT NULL,
    `Size` ENUM('P', 'M', 'G', 'GG', 'XG') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `Products_productColorsId_fkey` FOREIGN KEY (`productColorsId`) REFERENCES `productColors`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `Products_productSizesId_fkey` FOREIGN KEY (`productSizesId`) REFERENCES `productSizes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productColors` ADD CONSTRAINT `ProductColors_id_product_fkey` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productSizes` ADD CONSTRAINT `ProductSizes_id_product_fkey` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
