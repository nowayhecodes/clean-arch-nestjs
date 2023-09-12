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
import { AppService } from './app.service';
import { User } from '../domain/entities/user.entity';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { CreateUserCommand } from './commands/create-user.command';
import { UpdateUserCommand } from './commands/update-user.command';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetUsersQuery } from './queries/get-users.query';
import { GetUserByIdQuery } from './queries/get-userbyid.query';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('users')
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService, private readonly cmdBus: CommandBus, private readonly queryBus: QueryBus) { }

  @Get()
  async getUser(): Promise<User[]> {
    const query = new GetUsersQuery();
    return await this.queryBus.execute(query);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    const query = new GetUserByIdQuery(+id)
    return await this.queryBus.execute(query)
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
