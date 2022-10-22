/*
  Warnings:

  - Made the column `color` on table `productColors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `size` on table `productSizes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `productColors` MODIFY `color` ENUM('PRETO', 'ROSA', 'BRANCO', 'VERDE', 'AZUL') NOT NULL;

-- AlterTable
ALTER TABLE `productSizes` MODIFY `size` ENUM('P', 'M', 'G', 'GG', 'XG') NOT NULL;
