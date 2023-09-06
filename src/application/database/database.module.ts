import { Module } from '@nestjs/common';
import { databaseProvider } from '../providers/database.prodiver';

@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
