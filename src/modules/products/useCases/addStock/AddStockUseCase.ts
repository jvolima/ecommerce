import { prismaClient } from "../../../../database/prismaClient";

interface IAddStock {
  id: string,
  quantity: number;
}

export class AddStockUseCase {
  async execute({ id, quantity }: IAddStock) {
    const product = await prismaClient.product.findFirst({
      where: {
        id
      }
    });

    if(!product) {
      throw new Error("Product not found!");
    }

    const updated_quantity = product.quantity_in_stock + quantity;

    const updated_product = await prismaClient.product.update({
      where: {
        id
      },
      data: {
        quantity_in_stock: updated_quantity
      }
    });

    return updated_product;
  }
}