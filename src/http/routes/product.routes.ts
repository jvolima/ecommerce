import { Router } from "express";
import { ensureAdminAuthenticated } from "../../middlewares/ensureAdminAuthenticated";
import { AddStockController } from "../../modules/products/useCases/addStock/AddStockController";
import { CreateProductController } from "../../modules/products/useCases/createProduct/CreateProductController";
import { ListAvailableProductsController } from "../../modules/products/useCases/listAvailableProducts/ListAvailableProductsController";

const productRoutes = Router();

const createProductController = new CreateProductController();
const addStockController = new AddStockController();
const listAvailableProductsController = new ListAvailableProductsController();

productRoutes.post("/", ensureAdminAuthenticated, createProductController.handle);
productRoutes.put("/updateStock", ensureAdminAuthenticated, addStockController.handle);
productRoutes.get("/availables", listAvailableProductsController.handle);

export { productRoutes }