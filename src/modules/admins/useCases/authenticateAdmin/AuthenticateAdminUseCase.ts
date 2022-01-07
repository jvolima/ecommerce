import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../../../../database/prismaClient";

interface IAuthenticateAdmin {
  email: string;
  password: string;
}

export class AuthenticateAdminUseCase {
  async execute({ email, password }: IAuthenticateAdmin) {
    const admin = await prismaClient.admin.findFirst({
      where: { 
        email
      }
    });

    if(!admin) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, admin.password);

    if(!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    const token = sign({ email }, `${process.env.JWT_ADMIN_SECRET}`, {
      subject: admin.id,
      expiresIn: "1d"
    });

    return token;
  }
}