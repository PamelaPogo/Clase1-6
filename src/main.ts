import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //class validator
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false,
    whitelist: true,
    forbidNonWhitelisted: true
  }))
  

  //End class validator
  //swagger
  const config = new DocumentBuilder()
  .setTitle('Productos')
  .setDescription('Descripción de la API Productos')
  .setVersion('1.0')
  .addTag('productos')
  .build();
const document = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document)

//end swagger
  await app.listen(3021);
}
bootstrap();
