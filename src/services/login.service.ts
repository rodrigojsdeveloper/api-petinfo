import { userRepository } from "../repositories/user.repository";
import { ILogin } from "../interfaces/login.interface";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

class LoginService {
  public async login(user: ILogin): Promise<{ token: string }> {
    const findUser = await userRepository.findOneBy({ email: user.email });

    if (!findUser) {
      throw new Error("Invalid credentials");
    }

    const passwordMatch = await compare(user.password, findUser.password);

    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { email: findUser.email },
      process.env.SECRET_KEY as string,
      { expiresIn: "1d", subject: findUser.id }
    );

    return { token };
  }
}

export { LoginService };
