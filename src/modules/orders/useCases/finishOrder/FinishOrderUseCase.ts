import { Order } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

interface IFinishOrder {
  id_order: string;
  id_client: string;
}

export class FinishOrderUseCase {
  async execute({ id_order ,id_client }: IFinishOrder) {
    const order = await prismaClient.order.findFirst({
      where: {
        id: id_order,
        id_client,
      },
      select: {
        productsOrdered: true
      }
    });

    if(!order) {
      throw new Error("Order not found!");
    }

    const found_order = await prismaClient.order.findFirst({
      where: {
        id: id_order
      }
    }) as Order;

    if(found_order.end_at) {
      throw new Error("Order has already been finished!");
    }

    const productsOrdered = order.productsOrdered;

    let total = 0;

    await Promise.all(productsOrdered.map(async (productOrdered) => {
      const id_product = productOrdered.id_product;

      const quantity = productOrdered.quantity;

      const product = await prismaClient.product.findFirst({
        where: {
          id: id_product
        }
      });

      total += product?.unit_price as number * quantity;
    }));

    total += found_order.freight;

    const finishedOrder = await prismaClient.order.update({
      where: {
        id: id_order
      },
      data: {
        end_at: new Date(),
        total_price: total
      }
    });

    return finishedOrder;
  }
}