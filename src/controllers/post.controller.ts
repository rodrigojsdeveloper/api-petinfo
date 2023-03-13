import { PostService } from "../services/post.service";
import { IPost } from "../interfaces/post.interface";
import { Request, Response } from "express";

class PostController {
  public async create(req: Request, res: Response) {
    const data: IPost = req.body;

    const newPost = await new PostService().create(data);

    return res.status(201).json(newPost);
  }

  public async list(req: Request, res: Response) {
    const posts = await new PostService().list();

    return res.json(posts);
  }
}

export { PostController };
