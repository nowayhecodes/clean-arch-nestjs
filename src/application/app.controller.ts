import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '../domain/entities/user.entity';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { CreateUserCommand } from './commands/create-user.command';
import { UpdateUserCommand } from './commands/update-user.command';
import { CommandBus } from '@nestjs/cqrs';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService, private readonly cmdBus: CommandBus) { }

  @Get()
  getUser(): Promise<User[]> {
    return this.appService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.appService.findById(+id);
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
