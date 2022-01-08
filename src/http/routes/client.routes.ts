import { Router } from "express";
import { ensureClientAuthenticated } from "../../middlewares/ensureClientAuthenticated";
import { AuthenticateClientController } from "../../modules/clients/useCases/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../../modules/clients/useCases/createClient/CreateClientController";
import { ListClientOrdersController } from "../../modules/clients/useCases/listClientOrders/ListClientOrdersController";

const clientRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const listClientOrdersController = new ListClientOrdersController();

clientRoutes.post("/", createClientController.handle);
clientRoutes.post("/authenticate", authenticateClientController.handle);
clientRoutes.get("/orders", ensureClientAuthenticated, listClientOrdersController.handle);

export { clientRoutes }