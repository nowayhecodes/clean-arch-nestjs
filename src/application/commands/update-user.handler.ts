import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateUserCommand } from "./update-user.command";
import { AppService } from "../../shared/database/typeorm/repository/user-repository.adapter";
import { User } from "~/domain/entities/user.entity";

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    constructor(private readonly appServive: AppService) { }

    async execute(command: UpdateUserCommand): Promise<User> {
        const { id, updateUserDTO } = command;
        return await this.appServive.updateUser(id, updateUserDTO)
    }
}