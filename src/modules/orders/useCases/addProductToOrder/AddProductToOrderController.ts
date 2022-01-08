import { Request, Response } from 'express';
import { AddProductToOrderUseCase } from './AddProductToOrderUseCase';

export class AddProductToOrderController {
  async handle(request: Request, response: Response){
    const { id_client } = request;
    const { id_order, id_product, quantity } = request.body;

    const addProductToOrderUseCase = new AddProductToOrderUseCase();

    const productOrdered = await addProductToOrderUseCase.execute({
      id_order,
      id_product,
      id_client,
      quantity
    });

    return response.status(201).json(productOrdered);
  }
}