import { Router } from "express";
import { ensureAdminAuthenticated } from "../../middlewares/ensureAdminAuthenticated";
import { CreateProductController } from "../../modules/products/useCases/createProduct/CreateProductController";

const productRoutes = Router();

const createProductController = new CreateProductController();

productRoutes.post("/", ensureAdminAuthenticated, createProductController.handle);

export { productRoutes }