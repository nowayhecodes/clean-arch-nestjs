import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AppController } from './controller/app.controller';
import { UserRepositoryAdapter } from '../../database/typeorm/repository/user-repository.adapter';
import { DatabaseModule } from './database/database.module';
import { userProvider } from '../../database/typeorm/repository/providers/user.provider';
import { addressProvider } from '../../database/typeorm/repository/providers/address.provider';
import { recipientProvider } from '../../database/typeorm/repository/providers/recipient.provider';
import { CreateUserHandler } from '../../../application/commands/create-user.handler';
import { UpdateUserHandler } from '../../../application/commands/update-user.handler';
import { GetUsersHandler } from '../../../application/queries/get-users.handler';
import { GetUserByIdHandler } from '../../../application/queries/get-userbyid.handler';
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
