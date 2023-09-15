import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from './contracts/update-user.command';
import { UserRepositoryAdapter } from '../../shared/database/typeorm/repository/user-repository.adapter';
import { User } from '~/shared/database/typeorm/mapping/user.mapping';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(private readonly repository: UserRepositoryAdapter) {}

  async execute(command: UpdateUserCommand): Promise<User> {
    const { id, updateUserDTO } = command;
    return await this.repository.updateUser(id, updateUserDTO);
  }
}
