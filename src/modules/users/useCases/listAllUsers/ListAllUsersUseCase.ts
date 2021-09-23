import { response } from "express";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui

    const userAlreadyExsts = this.usersRepository.findById(user_id);

    if (userAlreadyExsts.admin !== true) {
      throw new Error("You are not allowed to do this!");
    }

    if (!userAlreadyExsts) {
      throw new Error("User already exists!");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
