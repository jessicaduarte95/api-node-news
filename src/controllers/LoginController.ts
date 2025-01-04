import { Request, Response } from "express";
import logger from "../domain/config/logger";
import { loginService } from "../services/LoginService";

class LoginControllers {
  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      const result = await loginService.login(body);

      logger.info("Login realizado com sucesso!");
      res.status(200).json({ message: "login_successfully", result });
    } catch (error: any) {
      logger.error(error.message, { error });
      res.status(500).json({ error: error.message });
    }
  }
}

export const loginControllers = new LoginControllers();
