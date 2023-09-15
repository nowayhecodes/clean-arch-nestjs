import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '~/shared/database/typeorm/mapping/user.mapping';
import { CreateUserDto } from '../../../../application/dtos/createUser.dto';
import { UpdateUserDto } from '../../../../application/dtos/updateUser.dto';

@Injectable()
export class UserRepositoryAdapter {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    return this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.addresses', 'address')
      .leftJoinAndSelect('address.recipient', 'recipient')
      .where({ id })
      .getOneOrFail();
  }

  async createUser(user: CreateUserDto) {
    const userData = this.userRepository.create(user);
    return this.userRepository.save(userData);
  }

  async updateUser(id: number, user: UpdateUserDto) {
    await this.userRepository.update({ id }, user);
    return await this.findById(id);
  }
}
