import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserRepositoryAdapter } from '../../../database/typeorm/repository/user-repository.adapter';
import { User } from '~/shared/database/typeorm/mapping/user.mapping';
import { CreateUserDto } from '../../../../application/dtos/createUser.dto';
import { UpdateUserDto } from '../../../../application/dtos/updateUser.dto';
import { CreateUserCommand } from '../../../../application/commands/create-user.command';
import { UpdateUserCommand } from '../../../../application/commands/update-user.command';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetUsersQuery } from '../../../../application/queries/get-users.query';
import { GetUserByIdQuery } from '../../../../application/queries/get-userbyid.query';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('users')
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(
    private readonly appService: UserRepositoryAdapter,
    private readonly cmdBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async getUser(): Promise<User[]> {
    const query = new GetUsersQuery();
    return await this.queryBus.execute(query);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    const query = new GetUserByIdQuery(+id);
    return await this.queryBus.execute(query);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const command = new CreateUserCommand(createUserDto);
    return await this.cmdBus.execute(command);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const command = new UpdateUserCommand(+id, updateUserDto);
    return await this.cmdBus.execute(command);
  }
}