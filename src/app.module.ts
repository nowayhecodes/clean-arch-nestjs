import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './application/database/database.module';
import { userProvider } from './application/providers/user.prodiver';
import { addressProvider } from './application/providers/address.provider';
import { recipientProvider } from './application/providers/recipient.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [
    ...userProvider,
    ...addressProvider,
    ...recipientProvider,
    AppService,
  ],
})
export class AppModule {}
