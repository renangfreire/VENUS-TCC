/*
  Warnings:

  - You are about to alter the column `statusOrder` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("orders_statusOrder")`.

*/
-- AlterTable
ALTER TABLE `orders` MODIFY `statusOrder` ENUM('PEDIDO_RECEBIDO', 'PEDIDO_SEPARACAO', 'NOTA_FISCAL_EMITIDA', 'PRODUTO_EXPEDIDO', 'ENVIADO', 'PEDIDO_EM_TRANSITO', 'ROTA_ENTREGA', 'ENTREGUE') NOT NULL DEFAULT 'PEDIDO_RECEBIDO';
