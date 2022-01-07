import { prismaClient } from "../../../../database/prismaClient";

interface ICreateCategory {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  async execute({ name, description }: ICreateCategory) {
    const categoryExists = await prismaClient.category.findFirst({
      where: {
        name
      }
    });

    if(categoryExists) {
      throw new Error("Category already exists!");
    }

    const category = await prismaClient.category.create({
      data: {
        name,
        description
      }
    });

    return category;
  }
}