-- CreateTable
CREATE TABLE "products_ordered" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_order" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "products_ordered_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_ordered_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
