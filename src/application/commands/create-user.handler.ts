import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateUserCommand } from "./create-user.command";
import { AppService } from "../app.service";
import { User } from "~/domain/entities/user.entity";

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor(private readonly appService: AppService) { }

    async execute(command: CreateUserCommand): Promise<User> {
        const { createUserDTO } = command
        return await this.appService.createUser(createUserDTO)
    }
}