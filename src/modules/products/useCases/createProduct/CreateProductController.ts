import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, id_category, unit_price, quantity_in_stock } = request.body;

    const createProductUseCase = new CreateProductUseCase();

    const product = await createProductUseCase.execute({
      name,
      description,
      id_category,
      unit_price,
      quantity_in_stock
    });

    return response.status(201).json(product);
  }
}