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
import { User } from './domain/entities/user.entity';
import { CreateUserDto } from './application/dtos/createUser.dto';
import { UpdateUserDto } from './application/dtos/updateUser.dto';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): Promise<User[]> {
    return this.appService.findAll();
  }

  @Get(':id')
  getUserById(@Param() id: string): Promise<User> {
    return this.appService.findById(+id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.appService.createUser(createUserDto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  updateUser(
    @Param() id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.appService.updateUser(updateUserDto);
  }
}
