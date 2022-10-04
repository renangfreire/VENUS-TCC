/*
  Warnings:

  - A unique constraint covering the columns `[productColorsId]` on the table `stock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productSizesId]` on the table `stock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productColorsId` to the `stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productSizesId` to the `stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stock` ADD COLUMN `productColorsId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productSizesId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `stock_productColorsId_key` ON `stock`(`productColorsId`);

-- CreateIndex
CREATE UNIQUE INDEX `stock_productSizesId_key` ON `stock`(`productSizesId`);

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_productColorsId_fkey` FOREIGN KEY (`productColorsId`) REFERENCES `productColors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_productSizesId_fkey` FOREIGN KEY (`productSizesId`) REFERENCES `productSizes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
