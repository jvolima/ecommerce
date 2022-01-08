import { Request, Response } from "express";
import { ListClientOrdersUseCase } from "./ListClientOrdersUseCase";

export class ListClientOrdersController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;

    const listClientOrdersUseCase = new ListClientOrdersUseCase();

    const orders = await listClientOrdersUseCase.execute(id_client);

    return response.json(orders);
  }
}