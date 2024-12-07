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
  public async findEmail(email: string) {
    return usersModel.findOne({email});
  }
}

export const usersRepository = new UsersRepository();
