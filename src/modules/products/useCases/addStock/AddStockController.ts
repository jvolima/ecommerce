import { Request, Response } from "express";
import { AddStockUseCase } from "./AddStockUseCase";

export class AddStockController {
  async handle(request: Request, response: Response) {
    const { id, quantity } = request.body;

    const addStockUseCase = new AddStockUseCase();

    const product = await addStockUseCase.execute({
      id,
      quantity
    });

    return response.json(product);
  }
}