import { DataSource } from 'typeorm';
import { Recipient } from 'src/domain/entities/recipient.entity';

export const recipientProvider = [
  {
    provide: 'RECIPIENT_REPOSITORY',
    useFactory: (datasource: DataSource) => datasource.getRepository(Recipient),
    inject: ['DATA_SOURCE'],
  },
];
