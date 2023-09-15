import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './contracts/create-user.command';
import { UserRepositoryAdapter } from '~/shared/database/typeorm/repository/user-repository.adapter';
import { User } from '~/shared/database/typeorm/mapping/user.mapping';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly appService: UserRepositoryAdapter) {}

  async execute(command: CreateUserCommand): Promise<User> {
    const { createUserDTO } = command;
    return await this.appService.createUser(createUserDTO);
  }
}
