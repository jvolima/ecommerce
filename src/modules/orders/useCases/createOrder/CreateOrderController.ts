import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

export class CreateOrderController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;
    const { freight, address, city, state, cep, country } = request.body;

    const createOrderUseCase = new CreateOrderUseCase();

    const order = await createOrderUseCase.execute({
      id_client,
      freight,
      address,
      city,
      cep,
      state,
      country
    });

    return response.status(201).json(order);
  }
}