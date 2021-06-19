import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        url: process.env.MUSIC_SERVICE_REDIS_URL,
      },
    },
  );
  app.listen(() => console.log('Microservice Kei is listening'));
}
bootstrap();
