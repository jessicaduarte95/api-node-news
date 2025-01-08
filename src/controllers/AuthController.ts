import { Request, Response } from "express";
import logger from "../domain/config/logger";
import { authService } from "../services/AuthService";

class AuthControllers {
  public async refreshToken(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      const result = await authService.refreshToken(body);
      logger.info("Refresh token realizado");
      res.status(200).json({ message: "refresh_token_successfully", result });
    } catch (error: any) {
      logger.error(error.message, { error });
      res.status(500).json({ error: error.message });
    }
  }
}

export const authControllers = new AuthControllers();
