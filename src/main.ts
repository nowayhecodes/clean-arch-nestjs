import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import helmet from '@fastify/helmet';
import compress from '@fastify/compress';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  await app.register(helmet);
  await app.register(compress, { encodings: ['gzip'] });

  const docOpts = new DocumentBuilder()
    .setTitle('Onboarding Project')
    .setDescription('Eu sou um gênio')
    .addTag('sof.to')
    .build();

  const doc = SwaggerModule.createDocument(app, docOpts);
  SwaggerModule.setup('docs', app, doc);

  await app.listen(+process.env.PORT, '0.0.0.0');
}
bootstrap();
