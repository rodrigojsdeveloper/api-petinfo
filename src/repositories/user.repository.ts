import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

const userRepository: Repository<User> = AppDataSource.getRepository(User);

export { userRepository };
