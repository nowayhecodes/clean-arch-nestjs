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
    return this.userRepository.createQueryBuilder('user')
      .leftJoinAndSelect('address', 'address', 'user.id = address.userId')
      .where({ id })
      .getOneOrFail()
  }

  async createUser(user: CreateUserDto) {
    return this.userRepository.save(user);
  }

  async updateUser(id: number, user: UpdateUserDto) {
    await this.userRepository.update({ id }, user)
    return await this.findById(id)
  }
}
