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
        entities: [`src/**/*.entity.ts`],
        migrations: [`src/migration/*.ts`],
        synchronize: false,
        logging: true,
        applicationName: 'Onboarding Dude',
      });

      return source.initialize();
    },
  },
];
