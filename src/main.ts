import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import helmet from '@fastify/helmet';
import compress from '@fastify/compress';

import { AppModule } from './shared/ioc/nestjs/app.module';
import { swaggerConfig } from './shared/framework/nestjs/config/swagger';

import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  await app.register(helmet);
  await app.register(compress, { encodings: ['gzip'] });

  swaggerConfig(app);

  await app.listen(+process.env.PORT, '0.0.0.0');
}

bootstrap();
