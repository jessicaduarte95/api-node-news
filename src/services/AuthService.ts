import jwt from "jsonwebtoken";
import config from "config";

import { usersRepository } from "../repositories/UsersRepository";

interface BodyAuth {
  userId: string;
}

class AuthService {
  public async refreshToken(body: BodyAuth) {
    try {
      const jwt_secret = config.get<string>("jwt_secret");
      
      if (!jwt_secret) {
        throw new Error("JWT secret is not configured.");
      }

      const data = await usersRepository.findById(body.userId);

      if (!data) {
        throw new Error("user_not_found");
      }

      const token = jwt.sign(
        { userId: data._id, email: data.email, name: data.name },
        jwt_secret,
        { expiresIn: "10min" }
      );

      const result = {
        token,
        userId: data._id,
        email: data.email,
        name: data.name,
      };

      return result;
    } catch (error) {
      throw error;
    }
  }
}

export const authService = new AuthService();
