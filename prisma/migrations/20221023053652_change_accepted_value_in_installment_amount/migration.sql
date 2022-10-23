/*
  Warnings:

  - You are about to alter the column `installment_amount` on the `payment_details` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `payment_details` MODIFY `installment_amount` DOUBLE NULL;
