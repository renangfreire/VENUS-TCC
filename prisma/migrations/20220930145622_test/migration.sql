/*
  Warnings:

  - Made the column `color` on table `productcolors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Size` on table `productsizes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `productcolors` MODIFY `color` ENUM('PRETO', 'ROSA', 'BRANCO', 'VERDE', 'AZUL') NOT NULL;

-- AlterTable
ALTER TABLE `productsizes` MODIFY `Size` ENUM('P', 'M', 'G', 'GG', 'XG') NOT NULL;
