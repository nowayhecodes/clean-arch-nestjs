import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './application/app.service';
import { DatabaseModule } from './application/database/database.module';
import { userProvider } from './application/providers/user.prodiver';
import { addressProvider } from './application/providers/address.provider';
import { recipientProvider } from './application/providers/recipient.provider';
import { CreateUserHandler } from './application/commands/create-user.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { UpdateUserHandler } from './application/commands/update-user.handler';

@Module({
  imports: [DatabaseModule, CqrsModule],
  controllers: [AppController],
  providers: [
    ...userProvider,
    ...addressProvider,
    ...recipientProvider,
    AppService,
    CreateUserHandler,
    UpdateUserHandler
  ],
})
export class AppModule { }
