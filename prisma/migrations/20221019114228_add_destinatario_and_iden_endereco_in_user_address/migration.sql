/*
  Warnings:

  - Added the required column `destinatario` to the `usersAddresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idenEndereco` to the `usersAddresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usersaddresses` ADD COLUMN `destinatario` VARCHAR(191) NOT NULL,
    ADD COLUMN `idenEndereco` VARCHAR(191) NOT NULL;
