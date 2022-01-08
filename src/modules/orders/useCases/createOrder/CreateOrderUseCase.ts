import { prismaClient } from "../../../../database/prismaClient";

interface ICreateOrder {
  id_client: string;
  freight: number;
  address: string;
  city: string;
  cep: number;
  state: string;
  country: string;
}

export class CreateOrderUseCase {
  async execute({ id_client, freight, address, city, cep, state, country }: ICreateOrder) {
    const order = await prismaClient.order.create({
      data: {
        id_client,
        freight,
        address,
        city,
        cep,
        state,
        country
      }
    });

    return order;
  }
}