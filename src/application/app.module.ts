import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { userProvider } from './providers/user.prodiver';
import { addressProvider } from './providers/address.provider';
import { recipientProvider } from './providers/recipient.provider';
import { CreateUserHandler } from './commands/create-user.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { UpdateUserHandler } from './commands/update-user.handler';
import { GetUsersHandler } from './queries/get-users.handler';
import { GetUserByIdHandler } from './queries/get-userbyid.handler';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [DatabaseModule, CqrsModule, CacheModule.register({ ttl: 60000, max: 10 })],
  controllers: [AppController],
  providers: [
    ...userProvider,
    ...addressProvider,
    ...recipientProvider,
    AppService,
    CreateUserHandler,
    UpdateUserHandler,
    GetUsersHandler,
    GetUserByIdHandler,
  ],
})
export class AppModule { }
