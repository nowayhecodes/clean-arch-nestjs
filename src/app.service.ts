import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './domain/entities/user.entity';
import { CreateUserDto } from './application/dtos/createUser.dto';
import { UpdateUserDto } from './application/dtos/updateUser.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    return this.userRepository.findOneByOrFail({ id });
  }

  async createUser(user: CreateUserDto) {
    const userData = this.userRepository.create(user)
    return this.userRepository.save(userData);
  }

  async updateUser(user: UpdateUserDto) {
    const userData = this.userRepository.create(user)
    return this.userRepository.save(userData);
  }
}
