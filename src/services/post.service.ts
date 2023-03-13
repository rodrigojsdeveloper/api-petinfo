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

  public async list(): Promise<Array<Post>> {
    const posts = await postRepository.find();

    return posts;
  }
}

export { PostService };
