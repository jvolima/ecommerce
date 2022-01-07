import { Router } from "express";
import { AuthenticateClientController } from "../../modules/clients/useCases/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../../modules/clients/useCases/createClient/CreateClientController";

const clientRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

clientRoutes.post("/", createClientController.handle);
clientRoutes.post("/authenticate", authenticateClientController.handle);

export { clientRoutes }