import { Router } from "express";
import { ensureAdminAuthenticated } from "../../middlewares/ensureAdminAuthenticated";
import { CreateCategoryController } from "../../modules/categories/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../../modules/categories/useCases/listCategories/ListCategoriesController";

const categoryRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoryRoutes.post("/", ensureAdminAuthenticated, createCategoryController.handle);
categoryRoutes.get("/", ensureAdminAuthenticated, listCategoriesController.handle);

export { categoryRoutes }