import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { UserRepositoryAdapter } from '../../shared/database/typeorm/repository/user-repository.adapter';
import { GetUsersQuery } from './contracts/get-users.query';
import { User } from '~/shared/database/typeorm/mapping/user.mapping';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly repository: UserRepositoryAdapter) {}

  async execute(query: GetUsersQuery): Promise<User[]> {
    return await this.repository.findAll();
  }
}
