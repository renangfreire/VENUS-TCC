/*
  Warnings:

  - Added the required column `installments` to the `payment_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `methodPayment` to the `payment_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payment_details` ADD COLUMN `installments` INTEGER NOT NULL,
    ADD COLUMN `methodPayment` VARCHAR(191) NOT NULL;
