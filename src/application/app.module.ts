import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserRepositoryAdapter } from '../shared/database/typeorm/repository/user-repository.adapter';
import { DatabaseModule } from '../shared/ioc/nestjs/database/database.module';
import { userProvider } from '../shared/database/typeorm/repository/providers/user.provider';
import { addressProvider } from '../shared/database/typeorm/repository/providers/address.provider';
import { recipientProvider } from '../shared/database/typeorm/repository/providers/recipient.provider';
import { CreateUserHandler } from './commands/create-user.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { UpdateUserHandler } from './commands/update-user.handler';
import { GetUsersHandler } from './queries/get-users.handler';
import { GetUserByIdHandler } from './queries/get-userbyid.handler';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    DatabaseModule,
    CqrsModule,
    CacheModule.register({ ttl: 60000, max: 10 }),
  ],
  controllers: [AppController],
  providers: [
    ...userProvider,
    ...addressProvider,
    ...recipientProvider,
    UserRepositoryAdapter,
    CreateUserHandler,
    UpdateUserHandler,
    GetUsersHandler,
    GetUserByIdHandler,
  ],
})
export class AppModule {}
