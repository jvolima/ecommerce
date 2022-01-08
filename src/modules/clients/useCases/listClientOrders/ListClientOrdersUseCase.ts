import { prismaClient } from "../../../../database/prismaClient";


export class ListClientOrdersUseCase {
  async execute(id_client: string) {
    const orders = await prismaClient.client.findMany({
      where: {
        id: id_client
      },
      select: {
        name: true,
        email: true,
        orders: true
      }
    });

    return orders;
  }
}