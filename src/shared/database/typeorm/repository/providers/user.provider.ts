import { DataSource } from 'typeorm';
import { User } from '~/shared/database/typeorm/mapping/user.mapping';

export const userProvider = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (datasource: DataSource) => datasource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
