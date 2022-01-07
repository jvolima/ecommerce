import { Router } from "express";
import { AuthenticateAdminController } from "../../modules/admins/useCases/authenticateAdmin/AuthenticateAdminController";
import { CreateAdminController } from "../../modules/admins/useCases/createAdmin/CreateAdminController";

const adminRoutes = Router();

const createAdminController = new CreateAdminController();
const authenticateAdminController = new AuthenticateAdminController();

adminRoutes.post("/", createAdminController.handle);
adminRoutes.post("/authenticate", authenticateAdminController.handle);

export { adminRoutes }