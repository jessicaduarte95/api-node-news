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
      const { error, value } = UserCreateValidation.validate(body);

      if (error) {
        throw new Error("error_validated_create_user " + error);
      }

      const result = usersRepository.createUser(value);

      return result;
    } catch (error) {
      throw error;
    }
  }
}

export const usersService = new UsersService();
