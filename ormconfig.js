module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [`src/**/*.entity.ts`],
  migrations: [`src/migrations/*.ts`],
  synchronize: false,
  logging: false,
  cli: {
    migrationsDir: `src/migrations`
  }
}