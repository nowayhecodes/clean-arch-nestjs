import { UpdateUserDto } from '~/application/dtos/updateUser.dto';

export class UpdateUserCommand {
  constructor(
    public readonly id: string,
    public readonly updateUserDTO: UpdateUserDto,
  ) {}
}
