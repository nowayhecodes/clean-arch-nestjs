import { DataSource } from 'typeorm';
import { Recipient } from '~/shared/database/typeorm/mapping/recipient.mapping';

export const recipientProvider = [
  {
    provide: 'RECIPIENT_REPOSITORY',
    useFactory: (datasource: DataSource) => datasource.getRepository(Recipient),
    inject: ['DATA_SOURCE'],
  },
];
