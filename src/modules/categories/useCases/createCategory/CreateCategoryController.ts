import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createCategoryUseCase = new CreateCategoryUseCase();

    const category = await createCategoryUseCase.execute({
      name,
      description
    });

    return response.status(201).json(category);
  }
}