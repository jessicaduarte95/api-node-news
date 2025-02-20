import { Request, Response } from "express";
import { postService } from "../services/PostService";
import logger from "../domain/config/logger";

class UsersControllers {
  public async registerPost(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      const { id } = req.params;
      const result = await postService.registerPost(id, body);

      logger.info("Post cadastrado com sucesso!", { result });

      res.status(201).json({ message: "post_created_successfully", result });
    } catch (error: any) {
      logger.error(error.message, { error });
      res.status(500).json({ error: error.message });
    }
  }
}

export const postControllers = new UsersControllers();
