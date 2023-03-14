import { UserService } from "../services/user.service";
import { IUser } from "../interfaces/user.interface";
import { Request, Response } from "express";

class UserController {
  public async create(req: Request, res: Response) {
    const data: IUser = req.body;

    const newUser = await new UserService().create(data);

    return res.status(201).json(newUser);
  }

  public async profile(req: Request, res: Response) {
    const email: string = req.email;

    const profile = await new UserService().profile(email);

    return res.json(profile);
  }
}

export { UserController };
