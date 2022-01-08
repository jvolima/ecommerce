import { Category } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

interface IListAvailableProducts {
  category_name?: string;
  name?: string;
}

export class ListAvailableProductsUseCase {
  async execute({ category_name, name }: IListAvailableProducts) {
    const products = await prismaClient.product.findMany();

    const availableProducts = products.filter((product) => product.quantity_in_stock > 0);

    if(category_name) {
      const category = await prismaClient.category.findFirst({
        where: {
          name: category_name
        }
      }) as Category;

      const products = availableProducts.filter((product) => product.id_category === category.id);

      return products;
    }
    else if(name) {
      const products = availableProducts.filter((product) => product.name === name);

      return products;
    }

    return availableProducts;
  }
}