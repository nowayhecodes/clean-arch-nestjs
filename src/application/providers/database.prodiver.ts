import { join } from 'path';
import { DataSource } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const source = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        migrations: [`src/migration/*.ts`],
        synchronize: true,
        logging: true,
        applicationName: 'Onboarding Dude',
      });

      return source.initialize();
    },
  },
];
