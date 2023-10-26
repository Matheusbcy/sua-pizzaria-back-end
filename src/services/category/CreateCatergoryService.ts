import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}

class CreateCatergoryService {
  async execute({ name }: CategoryRequest) {
    if (name == "") {
      throw new Error("Name invalid");
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CreateCatergoryService };
