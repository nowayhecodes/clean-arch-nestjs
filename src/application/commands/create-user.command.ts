import { CreateUserDto } from "../dtos/createUser.dto";

export class CreateUserCommand {
    constructor(public readonly createUserDTO: CreateUserDto) { }
}