import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

const options = {
  origin: ['http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
  ],
  credentials: true,
  optionSuccessStatus: 200,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(options);
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 4000);
}
await bootstrap();
