import { prismaClient } from "../../../../database/prismaClient";


interface ICreateProduct {
  name: string;
  description: string;
  id_category: string;
  unit_price: number;
  quantity_in_stock: number;
}

export class CreateProductUseCase {
  async execute({
      name, 
      description, 
      id_category, 
      unit_price, 
      quantity_in_stock, 
    }: ICreateProduct
  ) {
    const category = await prismaClient.category.findFirst({
      where: {
        id: id_category
      }
    });

    if(!category) {
      throw new Error("Category not found!");
    }

    const product = await prismaClient.product.create({
      data: {
        name,
        description,
        id_category,
        unit_price,
        quantity_in_stock
      }
    });

    return product;
  }
}