import { PostCreateValidation } from "../domain/validation/postValidation";

import { usersRepository } from "../repositories/UsersRepository";
import { postsRepository } from "../repositories/PostsRepository";

interface BodyRegisterPost {
  content: string;
}

class PostService {
  async registerPost(id: string, body: BodyRegisterPost) {
    try {
      const checkUser = await usersRepository.findById(id);
      if(!checkUser) {
        throw new Error("user_not_found ");
      }

      const { error, value } = PostCreateValidation.validate(body);

      if (error) {
        throw new Error("error_validated_create_post " + error);
      }

      const data = {
        userId: id,
        post: value.content
      }

      await postsRepository.createPost(data);

      return;
    } catch (error) {
      throw error;
    }
  }
}

export const postService = new PostService();
