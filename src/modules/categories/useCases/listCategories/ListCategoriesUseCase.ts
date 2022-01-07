import { prismaClient } from "../../../../database/prismaClient";


export class ListCategoriesUseCase {
  async execute() {
    const categories = await prismaClient.category.findMany();

    return categories;
  }
}