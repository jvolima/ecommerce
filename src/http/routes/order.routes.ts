import { Router } from "express";
import { ensureClientAuthenticated } from "../../middlewares/ensureClientAuthenticated";
import { CreateOrderController } from "../../modules/orders/useCases/createOrder/CreateOrderController";

const orderRoutes = Router();

const createOrderController = new CreateOrderController();

orderRoutes.post("/", ensureClientAuthenticated, createOrderController.handle);

export { orderRoutes }