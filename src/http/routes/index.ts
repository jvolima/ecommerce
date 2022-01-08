import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { categoryRoutes } from "./category.routes";
import { clientRoutes } from "./client.routes";
import { orderRoutes } from "./order.routes";
import { productRoutes } from "./product.routes";

const routes = Router();

routes.use("/clients", clientRoutes);
routes.use("/admins", adminRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/products", productRoutes);
routes.use("/orders", orderRoutes);

export { routes }