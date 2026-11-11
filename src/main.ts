import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
    .setTitle('Voiture example')
    .setDescription('The Voiture API description')
    .setVersion('1.0')
    .addTag('voiture')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  const configservice = app.get(ConfigService);
  const port = Number(configservice.get<string>('PORT') ?? '3000');
  await app.listen(port);
}
void bootstrap();
