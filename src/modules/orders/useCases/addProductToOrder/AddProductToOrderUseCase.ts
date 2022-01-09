import { prismaClient } from "../../../../database/prismaClient";


interface IAddProductToOrder {
  id_order: string;
  id_product: string;
  id_client: string;
  quantity: number;
}

export class AddProductToOrderUseCase {
  async execute({ id_order, id_product, id_client, quantity }: IAddProductToOrder) {
    if(quantity <= 0) {
      throw new Error("Please, enter a valid value for the quantity of products")
    } 

    const order = await prismaClient.order.findFirst({
      where: {
        id: id_order,
        id_client
      }
    });

    if(!order) {
      throw new Error("Order not found!");
    }

    if(order.end_at) {
      throw new Error("Order has already been finished!");
    }

    const product = await prismaClient.product.findFirst({
      where: {
        id: id_product  
      }
    });

    if(!product) {
      throw new Error("Product not found!");
    }

    const new_quantity_in_stock = product.quantity_in_stock - quantity;

    const productOrdered = await prismaClient.productOrdered.create({
      data: {
        id_order,
        id_product,
        quantity
      }
    });

    await prismaClient.product.update({
      where: {
        id: id_product
      },
      data: {
        quantity_in_stock: new_quantity_in_stock
      }
    })

    return productOrdered;
  }
}