/*
  Warnings:

  - You are about to drop the column `status` on the `payment_details` table. All the data in the column will be lost.
  - Added the required column `statusPag` to the `payment_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orders` MODIFY `rastreio` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `payment_details` DROP COLUMN `status`,
    ADD COLUMN `statusPag` ENUM('PENDING', 'INPROCESS', 'REJECTED', 'CANCELED', 'APPROVED') NOT NULL;
