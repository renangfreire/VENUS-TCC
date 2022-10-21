-- AlterTable
ALTER TABLE `productcolors` MODIFY `color` ENUM('UNICO', 'PRETO', 'ROSA', 'BRANCO', 'VERDE', 'AZUL') NOT NULL;

-- AlterTable
ALTER TABLE `productsizes` MODIFY `size` ENUM('UNICO', 'P', 'M', 'G', 'GG', 'XG') NOT NULL;
