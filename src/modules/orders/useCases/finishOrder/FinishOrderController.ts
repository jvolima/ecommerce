import { Request, Response } from "express";
import { FinishOrderUseCase } from "./FinishOrderUseCase";

export class FinishOrderController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;
    const { id_order } = request.body;

    const finishOrderUseCase = new FinishOrderUseCase();

    const order = await finishOrderUseCase.execute({
      id_order,
      id_client
    });

    return response.json(order);
  }
}