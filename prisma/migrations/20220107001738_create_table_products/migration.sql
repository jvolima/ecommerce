-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,
    "unit_price" REAL NOT NULL,
    "quantity_in_stock" INTEGER NOT NULL,
    "quantity_ordered" INTEGER NOT NULL,
    CONSTRAINT "products_id_fkey" FOREIGN KEY ("id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
