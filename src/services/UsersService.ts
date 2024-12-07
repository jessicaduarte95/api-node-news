import bcrypt from "bcryptjs";

import { UserCreateValidation } from "../domain/validation/userValidation";
import { usersRepository } from "../repositories/UsersRepository";

interface BodyCreateUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class UsersService {
  public async createUser(body: BodyCreateUser) {
    try {
      const { error, value } = UserCreateValidation.validate(body);

      const newPassword = await bcrypt.hash(value.password, 10);

      const data = {
        name: value.name,
        email: value.email,
        password: newPassword,
      };

      if (error) {
        throw new Error("error_validated_create_user " + error);
      }

      await usersRepository.createUser(data);

      return;
    } catch (error) {
      throw error;
    }
  }
}

export const usersService = new UsersService();
