import { Request, Response } from "express";
import { ListAvailableProductsUseCase } from "./ListAvailableProductsUseCase";

export class ListAvailableProductsController {
  async handle(request: Request, response: Response) {
    const { category_name, name } = request.query;

    const listAvailableProductsUseCase = new ListAvailableProductsUseCase();

    const products = await listAvailableProductsUseCase.execute({
      category_name: category_name as string,
      name: name as string
    });

    return response.json(products);
  }
}