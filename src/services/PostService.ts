import { usersRepository } from "../repositories/UsersRepository";

interface BodyRegisterPost {}

class PostService {
  async registerPost(id: string, body: BodyRegisterPost) {
    try {
      const checkUser = await usersRepository.findById(id);
      if(!checkUser) {
        throw new Error("user_not_found ");
      }
      console.log("User: ", checkUser);
    } catch (error) {
      throw error;
    }
  }
}

export const postService = new PostService();
