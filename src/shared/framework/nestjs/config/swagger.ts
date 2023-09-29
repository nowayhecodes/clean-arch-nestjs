import { ConfigService } from '@nestjs/config'
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule
} from '@nestjs/swagger'

export const swaggerConfig = app => {
  const configService = new ConfigService()
  const swaggerDocumentBuilder = new DocumentBuilder()
    .addTag('Clean Arch NestJS')
    .addBearerAuth()
    .setTitle(configService.get<string>('Clean Arch Project'))
    .setDescription(configService.get<string>('Minha abordagem sobre clean arch com NestJS'))
    .setVersion(configService.get<string>('1.0'))
    .setBasePath(configService.get<string>('http://127.0.0.1:3333/users'))
    .build()

  const swaggerDocumentOptions: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) =>
      `${controllerKey}_${methodKey}`
  }

  const document = SwaggerModule.createDocument(
    app,
    swaggerDocumentBuilder,
    swaggerDocumentOptions
  )

  SwaggerModule.setup('docs', app, document)

  return document
}