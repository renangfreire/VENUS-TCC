-- AlterTable
ALTER TABLE `productColors` MODIFY `color` ENUM('UNICO', 'PRETO', 'ROSA', 'BRANCO', 'VERDE', 'AZUL') NOT NULL;

-- AlterTable
ALTER TABLE `productSizes` MODIFY `size` ENUM('UNICO', 'P', 'M', 'G', 'GG', 'XG') NOT NULL;
