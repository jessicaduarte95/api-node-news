import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";

import { LoginValidation } from "../domain/validation/loginValidations";
import { usersRepository } from "../repositories/UsersRepository";

interface BodyLogin {
  email: string;
  password: string;
}

class LoginService {
  public async login(body: BodyLogin) {
    try {
      const { error, value } = LoginValidation.validate(body);

      if (error) {
        throw new Error("error_validated_login " + error);
      }

      const jwt_secret = config.get<string>("jwt_secret");

      if (!jwt_secret) {
        throw new Error("JWT secret is not configured.");
      }

      const data = await usersRepository.findEmail(value.email);

      if (!data) {
        throw new Error("email_not_found");
      }

      const comparePassword = bcrypt.compareSync(value.password, data.password);

      if (!comparePassword) {
        throw new Error("incorrect_password");
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

export const loginService = new LoginService();
