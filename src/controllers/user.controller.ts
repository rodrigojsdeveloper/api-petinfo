import { UserService } from "../services/user.service";
import { IUser } from "../interfaces/user.interface";
import { Request, Response } from "express";

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async create(req: Request, res: Response) {
    const data: IUser = req.body;

    const newUser = await this.userService.create(data);

    return res.status(201).json(newUser);
  }
}

export { UserController };
