import { postRepository } from "../repositories/post.repository";
import { IPost } from "../interfaces/post.interface";
import { Post } from "../entities/post.entity";

class PostService {
  public async create(post: IPost): Promise<Post> {
    const newPost = new Post();
    newPost.title = post.title;
    newPost.description = post.description;

    postRepository.create(newPost);
    await postRepository.save(newPost);

    return newPost;
  }
}

export { PostService };
