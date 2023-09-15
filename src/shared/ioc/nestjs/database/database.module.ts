import { Module } from '@nestjs/common';
import { databaseProvider } from '../../../database/typeorm/repository/providers/database.provider';

@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
