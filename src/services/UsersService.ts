import bcrypt from "bcryptjs";

import { UserCreateValidation } from "../domain/validation/userValidation";
import { usersRepository } from "../repositories/UsersRepository";

interface BodyCreateUser {
  name: string;
  email: string;
  password: string;
}

class UsersService {
  public async createUser(body: BodyCreateUser) {
    try {
      const newPassword = await bcrypt.hash(body.password, 10);

      const data = {
        ...body,
        password: newPassword,
      };

      const { error, value } = UserCreateValidation.validate(data);

      if (error) {
        throw new Error("error_validated_create_user " + error);
      }

      await usersRepository.createUser(value);

      return;
    } catch (error) {
      throw error;
    }
  }
}

export const usersService = new UsersService();
