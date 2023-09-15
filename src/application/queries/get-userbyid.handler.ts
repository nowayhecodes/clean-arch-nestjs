import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { UserRepositoryAdapter } from '../../shared/database/typeorm/repository/user-repository.adapter';
import { User } from '~/shared/database/typeorm/mapping/user.mapping';
import { GetUserByIdQuery } from './contracts/get-userbyid.query';

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
  constructor(private readonly appService: UserRepositoryAdapter) {}

  async execute(query: GetUserByIdQuery): Promise<User> {
    const { id } = query;
    return await this.appService.findById(id);
  }
}
