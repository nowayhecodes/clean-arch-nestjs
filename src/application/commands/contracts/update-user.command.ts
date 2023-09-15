import { UpdateUserDto } from '~/application/dtos/updateUser.dto';

export class UpdateUserCommand {
  constructor(
    public readonly id: number,
    public readonly updateUserDTO: UpdateUserDto,
  ) {}
}
