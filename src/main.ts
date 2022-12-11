import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  //await app.listen(3000);

  // Configuración Swagger en NestJS
  const config = new DocumentBuilder()
    .setTitle('emtelco Reports BI API')
    .setDescription('Documentación emtelco Reports BI API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // URL API
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
