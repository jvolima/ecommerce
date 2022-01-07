import { hash } from "bcrypt";
import { prismaClient } from "../../../../database/prismaClient";

interface ICreateAdmin {
  name: string;
  email: string;
  password: string;
}

export class CreateAdminUseCase {
  async execute({ name, email, password }: ICreateAdmin) {
    const adminExists = await prismaClient.admin.findFirst({
      where: {
        email
      }
    });

    if(adminExists) {
      throw new Error("Admin already exists!");
    }

    const hashPassword = await hash(password, 10);

    const admin = await prismaClient.admin.create({
      data: {
        name,
        email, 
        password: hashPassword
      }
    });

    return admin;
  }
}