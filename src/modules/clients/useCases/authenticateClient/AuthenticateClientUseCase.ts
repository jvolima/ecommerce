import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../../../../database/prismaClient";

interface IAuthenticateClient {
  email: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ email, password }: IAuthenticateClient) {
    const client = await prismaClient.client.findFirst({
      where: {
        email
      }
    });

    if(!client) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, client.password);

    if(!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    const token = sign({ email }, `${process.env.JWT_CLIENT_SECRET}`, {
      subject: client.id,
      expiresIn: "1d"
    });

    return token;
  }
}