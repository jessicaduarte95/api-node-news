import bcrypt from "bcryptjs";

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

      const data = await usersRepository.findEmail(value.email);

      if (!data) {
        throw new Error("email_not_found");
      }

      const comparePassword = bcrypt.compareSync(value.password, data.password);

      if (!comparePassword) {
        throw new Error("incorrect_password");
      }

      return;
    } catch (error) {
      throw error;
    }
  }
}

export const loginService = new LoginService();
