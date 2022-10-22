-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `sexo` VARCHAR(191) NULL,
    `tel` VARCHAR(191) NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usersAddresses` (
    `id` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `identificacao` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `complemento` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` VARCHAR(191) NOT NULL,
    `valor` DECIMAL(65, 30) NOT NULL,
    `dateOrdered` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `statusPag` VARCHAR(191) NOT NULL,
    `rastreio` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `value` DECIMAL(65, 30) NOT NULL,
    `color` ENUM('PRETO', 'ROSA', 'BRANCO', 'VERDE', 'AZUL') NOT NULL,
    `size` ENUM('P', 'M', 'G', 'GG', 'XG') NOT NULL,

    UNIQUE INDEX `Products_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
