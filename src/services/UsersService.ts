import { UserCreateValidation } from "../domain/validation/userValidation";

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
      console.log("Teste");
      return;
    } catch (error) {
      throw error;
    }
  }
}

export const usersService = new UsersService();
