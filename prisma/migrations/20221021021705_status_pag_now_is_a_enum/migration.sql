/*
  Warnings:

  - You are about to alter the column `statusPag` on the `payment_details` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("Payment_details_statusPag")`.

*/
-- AlterTable
ALTER TABLE `payment_details` MODIFY `statusPag` ENUM('PENDING', 'INPROCESS', 'REJECTED', 'CANCELED', 'APPROVED') NOT NULL;
