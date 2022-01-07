import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { categoryRoutes } from "./category.routes";
import { clientRoutes } from "./client.routes";
import { productRoutes } from "./product.routes";

const routes = Router();

routes.use("/clients", clientRoutes);
routes.use("/admins", adminRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/products", productRoutes);

export { routes }