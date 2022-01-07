import { Router } from "express";
import { CreateAdminController } from "../../modules/admins/useCases/createAdmin/CreateAdminController";

const adminRoutes = Router();

const createAdminController = new CreateAdminController();

adminRoutes.post("/", createAdminController.handle);

export { adminRoutes }