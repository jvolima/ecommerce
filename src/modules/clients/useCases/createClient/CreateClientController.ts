import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { name, email, password, phone_number } = request.body;

    const createClientUseCase = new CreateClientUseCase();

    const client = await createClientUseCase.execute({
      name,
      email,
      password,
      phone_number
    });

    return response.status(201).json(client);
  }
}