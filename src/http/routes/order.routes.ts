import { Router } from "express";
import { ensureClientAuthenticated } from "../../middlewares/ensureClientAuthenticated";
import { AddProductToOrderController } from "../../modules/orders/useCases/addProductToOrder/AddProductToOrderController";
import { CreateOrderController } from "../../modules/orders/useCases/createOrder/CreateOrderController";
import { FinishOrderController } from "../../modules/orders/useCases/finishOrder/FinishOrderController";

const orderRoutes = Router();

const createOrderController = new CreateOrderController();
const addProductToOrderController = new AddProductToOrderController();
const finishOrderController = new FinishOrderController();

orderRoutes.post("/", ensureClientAuthenticated, createOrderController.handle);
orderRoutes.post("/addProducts", ensureClientAuthenticated, addProductToOrderController.handle);
orderRoutes.put("/finishOrder", ensureClientAuthenticated, finishOrderController.handle);

export { orderRoutes }