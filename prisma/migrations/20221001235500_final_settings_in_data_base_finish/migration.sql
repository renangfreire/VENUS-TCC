/*
  Warnings:

  - You are about to alter the column `color` on the `productcolors` table. The data in that column could be lost. The data in that column will be cast from `Enum("productcolors_color")` to `Enum("productColors_color")`.
  - You are about to alter the column `size` on the `productsizes` table. The data in that column could be lost. The data in that column will be cast from `Enum("productsizes_size")` to `Enum("productSizes_size")`.
  - You are about to drop the `useraddresses` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[productsId]` on the table `stock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productColorsId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productSizesId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productsId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userAddressesId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockId` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productsId` to the `stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `productcolors` DROP FOREIGN KEY `ProductColors_id_product_fkey`;

-- DropForeignKey
ALTER TABLE `productsizes` DROP FOREIGN KEY `ProductSizes_id_product_fkey`;

-- AlterTable
ALTER TABLE `orders` ADD COLUMN `productColorsId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productSizesId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productsId` VARCHAR(191) NOT NULL,
    ADD COLUMN `userAddressesId` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `productcolors` MODIFY `color` ENUM('PRETO', 'ROSA', 'BRANCO', 'VERDE', 'AZUL') NULL;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `stockId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `productsizes` MODIFY `size` ENUM('P', 'M', 'G', 'GG', 'XG') NULL;

-- AlterTable
ALTER TABLE `stock` ADD COLUMN `productsId` VARCHAR(191) NOT NULL,
    ADD COLUMN `quantidade` INTEGER NOT NULL;

-- DropTable
DROP TABLE `useraddresses`;

-- CreateTable
CREATE TABLE `usersAddresses` (
    `id` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `identificacao` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `complemento` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoriesOnProducts` (
    `id` VARCHAR(191) NOT NULL,
    `productsId` VARCHAR(191) NOT NULL,
    `categoriesId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Categories_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `stock_productsId_key` ON `stock`(`productsId`);

-- AddForeignKey
ALTER TABLE `usersAddresses` ADD CONSTRAINT `usersAddresses_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_productColorsId_fkey` FOREIGN KEY (`productColorsId`) REFERENCES `productColors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_productSizesId_fkey` FOREIGN KEY (`productSizesId`) REFERENCES `productSizes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_userAddressesId_fkey` FOREIGN KEY (`userAddressesId`) REFERENCES `usersAddresses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productColors` ADD CONSTRAINT `productColors_id_product_fkey` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productSizes` ADD CONSTRAINT `productSizes_id_product_fkey` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnProducts` ADD CONSTRAINT `CategoriesOnProducts_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnProducts` ADD CONSTRAINT `CategoriesOnProducts_categoriesId_fkey` FOREIGN KEY (`categoriesId`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `products` RENAME INDEX `Products_id_key` TO `products_id_key`;
