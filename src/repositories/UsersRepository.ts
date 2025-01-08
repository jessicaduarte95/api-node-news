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
  public async findById(useId: string) {
    return usersModel.findById({_id: useId});
  }
}

export const usersRepository = new UsersRepository();
