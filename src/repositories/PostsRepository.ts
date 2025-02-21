import postModel from "../models/PostModel";

interface DataCreatePost {
  userId: string;
  post: string;
}

class PostsRepository {
  public async createPost(data: DataCreatePost) {
    return postModel.create(data);
  }
}

export const postsRepository = new PostsRepository();
