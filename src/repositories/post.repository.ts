import { Post } from "../entities/post.entity";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

const postRepository: Repository<Post> = AppDataSource.getRepository(Post);

export { postRepository };
