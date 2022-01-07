import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { clientRoutes } from "./client.routes";

const routes = Router();

routes.use("/clients", clientRoutes);
routes.use("/admins", adminRoutes);

export { routes }