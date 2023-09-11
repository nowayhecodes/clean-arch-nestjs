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
