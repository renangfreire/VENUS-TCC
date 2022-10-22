/*
  Warnings:

  - You are about to drop the column `Size` on the `productSizes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `productColors` MODIFY `color` ENUM('NONE', 'PRETO', 'ROSA', 'BRANCO', 'VERDE', 'AZUL') NULL DEFAULT 'NONE';

-- AlterTable
ALTER TABLE `productSizes` DROP COLUMN `Size`,
    ADD COLUMN `size` ENUM('NONE', 'P', 'M', 'G', 'GG', 'XG') NULL DEFAULT 'NONE';
