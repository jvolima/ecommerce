import { hash } from "bcrypt";
import { prismaClient } from "../../../../database/prismaClient";

interface ICreateClient {
  name: string;
  email: string;
  password: string;
  phone_number: number;
}

export class CreateClientUseCase {
  async execute({ name, email, password, phone_number }: ICreateClient) {
    const clientExists = await prismaClient.client.findFirst({
      where: {
        email
      }
    });

    if(clientExists) {
      throw new Error("Client already exists!");
    }

    const hashPassword = await hash(password, 10);

    const client = await prismaClient.client.create({
      data: {
        name,
        email,
        password: hashPassword,
        phone_number
      }
    });

    return client;
  }
}