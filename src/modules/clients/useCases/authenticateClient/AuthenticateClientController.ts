import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateClientUseCase = new AuthenticateClientUseCase();

    const token = await authenticateClientUseCase.execute({
      email,
      password
    });

    return response.json(token);
  }
}