/*
  Warnings:

  - You are about to drop the column `quantity_ordered` on the `products` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,
    "unit_price" REAL NOT NULL,
    "quantity_in_stock" INTEGER NOT NULL,
    CONSTRAINT "products_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products" ("description", "id", "id_category", "name", "quantity_in_stock", "unit_price") SELECT "description", "id", "id_category", "name", "quantity_in_stock", "unit_price" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
