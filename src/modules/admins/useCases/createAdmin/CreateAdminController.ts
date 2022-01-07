import { Request, Response } from "express";
import { CreateAdminUseCase } from "./CreateAdminUseCase";

export class CreateAdminController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createAdminUseCase = new CreateAdminUseCase();

    const admin = await createAdminUseCase.execute({
      name,
      email,
      password
    });

    return response.status(201).json(admin);
  }
}