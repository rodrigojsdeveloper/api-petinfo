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

  public async update(req: Request, res: Response) {
    const id: string = req.params.id;

    const data: Partial<IPost> = req.body;

    const updatedPost = await new PostService().update(data, id);

    return res.json(updatedPost);
  }

  public async delete(req: Request, res: Response) {
    const id: string = req.params.id;

    await new PostService().delete(id);

    return res.status(204).json();
  }
}

export { PostController };
