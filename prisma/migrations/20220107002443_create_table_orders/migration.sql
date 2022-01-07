/*
  Warnings:

  - You are about to drop the column `address` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `clients` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_client" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" DATETIME,
    "freight" REAL NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "cep" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    CONSTRAINT "orders_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL
);
INSERT INTO "new_clients" ("email", "id", "name", "password", "phone_number") SELECT "email", "id", "name", "password", "phone_number" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,
    "unit_price" REAL NOT NULL,
    "quantity_in_stock" INTEGER NOT NULL,
    "quantity_ordered" INTEGER NOT NULL,
    CONSTRAINT "products_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products" ("description", "id", "id_category", "name", "quantity_in_stock", "quantity_ordered", "unit_price") SELECT "description", "id", "id_category", "name", "quantity_in_stock", "quantity_ordered", "unit_price" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
