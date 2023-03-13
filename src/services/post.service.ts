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

  public async update(post: Partial<IPost>, id: string): Promise<Post> {
    const findPost = await postRepository.findOneBy({ id });

    if (!findPost) {
      throw new Error("Post");
    }

    await postRepository.update(id, {
      title: post.title ? post.title : findPost.title,
      description: post.description ? post.description : findPost.description,
    });

    const updatedPost = await postRepository.findOneBy({ id: findPost.id });

    return updatedPost!;
  }

  public async delete(id: string): Promise<void> {
    const post = await postRepository.findOneBy({ id });

    if (!post) {
      throw new Error("Post");
    }

    await postRepository.delete(post.id);
  }

  public async view(id: string): Promise<Post> {
    const post = await postRepository.findOneBy({ id });

    if (!post) {
      throw new Error("Post");
    }

    return post;
  }
}

export { PostService };
