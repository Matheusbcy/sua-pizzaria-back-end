import { Request, Response } from "express";
import { CreateCatergoryService } from "../../services/category/CreateCatergoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const createCatergoryService = new CreateCatergoryService();

    const category = await createCatergoryService.execute({ name });

    return res.json(category);
  }
}
export { CreateCategoryController };
