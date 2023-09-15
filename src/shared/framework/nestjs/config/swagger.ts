import { ConfigService } from '@nestjs/config'
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule
} from '@nestjs/swagger'

export const swaggerConfig = app => {
  const configService = new ConfigService()
  const swaggerDocumentBuilder = new DocumentBuilder()
    .addTag('Onboarding Project')
    .addBearerAuth()
    .setTitle(configService.get<string>('Onboarding Project'))
    .setDescription(configService.get<string>('Projeto de Onboarding'))
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