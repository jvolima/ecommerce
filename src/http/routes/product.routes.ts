import { Router } from "express";
import { ensureAdminAuthenticated } from "../../middlewares/ensureAdminAuthenticated";
import { AddStockController } from "../../modules/products/useCases/addStock/AddStockController";
import { CreateProductController } from "../../modules/products/useCases/createProduct/CreateProductController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const addStockController = new AddStockController();

productRoutes.post("/", ensureAdminAuthenticated, createProductController.handle);
productRoutes.put("/updateStock", ensureAdminAuthenticated, addStockController.handle);

export { productRoutes }