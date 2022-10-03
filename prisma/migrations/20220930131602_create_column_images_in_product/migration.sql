/*
  Warnings:

  - Added the required column `images` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `images` JSON NOT NULL,
    MODIFY `color` ENUM('PRETO', 'ROSA', 'BRANCO', 'VERDE', 'AZUL') NULL,
    MODIFY `size` ENUM('P', 'M', 'G', 'GG', 'XG') NULL;
