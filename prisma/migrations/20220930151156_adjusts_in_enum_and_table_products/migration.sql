/*
  Warnings:

  - You are about to drop the column `Size` on the `productsizes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `productcolors` MODIFY `color` ENUM('NONE', 'PRETO', 'ROSA', 'BRANCO', 'VERDE', 'AZUL') NULL DEFAULT 'NONE';

-- AlterTable
ALTER TABLE `productsizes` DROP COLUMN `Size`,
    ADD COLUMN `size` ENUM('NONE', 'P', 'M', 'G', 'GG', 'XG') NULL DEFAULT 'NONE';
