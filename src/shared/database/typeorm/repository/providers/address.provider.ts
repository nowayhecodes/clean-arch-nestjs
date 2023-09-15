import { DataSource } from 'typeorm';
import { Address } from 'src/domain/entities/address.entity';

export const addressProvider = [
  {
    provide: 'ADDRESS_REPOSITORY',
    useFactory: (datasource: DataSource) => datasource.getRepository(Address),
    inject: ['DATA_SOURCE'],
  },
];
