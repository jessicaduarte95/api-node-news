import { Request, Response, RequestHandler } from "express";
import { usersService } from "../services/UsersService";
import logger from "../domain/config/logger";

class UsersControllers {
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      const result = await usersService.createUser(body);

      logger.info("Usuário criado com sucesso!", { result });

      res.status(201).json({ message: "user_created_successfully", result });
    } catch (error: any) {
      logger.error(error.message, { error });
      res.status(500).json({ error: error.message });
    }
  }
}

export const usersControllers = new UsersControllers();
