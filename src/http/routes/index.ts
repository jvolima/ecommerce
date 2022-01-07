import { Router } from "express";
import { clientRoutes } from "./client.routes";

const routes = Router();

routes.use("/clients", clientRoutes);

export { routes }