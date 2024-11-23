import usersModel from "../models/UsersModel";

interface DataCreateUser {
  name: string;
  email: string;
  password: string;
}

class UsersRepository {
  public async createUser(data: DataCreateUser) {
    return usersModel.create(data);
  }
}

export const usersRepository = new UsersRepository();
