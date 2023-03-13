import { userRepository } from "../repositories/user.repository";
import { IUser } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";
import { hash } from "bcrypt";

class UserService {
  public async create(user: IUser): Promise<User> {
    const hashedPassword = await hash(user.password, 10);

    const newUser = new User();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = hashedPassword;
    newUser.profile_picture_link = user.profile_picture_link;

    userRepository.create(newUser);
    await userRepository.save(newUser);

    Reflect.deleteProperty(newUser, "password");

    return newUser;
  }
}

export { UserService };