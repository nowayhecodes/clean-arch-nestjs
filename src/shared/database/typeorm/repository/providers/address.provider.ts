import { DataSource } from 'typeorm';
import { Address } from '~/shared/database/typeorm/mapping/address.mapping';

export const addressProvider = [
  {
    provide: 'ADDRESS_REPOSITORY',
    useFactory: (datasource: DataSource) => datasource.getRepository(Address),
    inject: ['DATA_SOURCE'],
  },
];
