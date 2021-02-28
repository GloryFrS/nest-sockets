import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    EventsModule,
    HttpModule.registerAsync({
      useFactory: () => ({
        baseURL: 'https://apprin.sgugit.ru',
        timeout: 5000,
        responseType: 'stream',
        headers: {
          Cookie:
            'JSESSIONID=881b2ab9dadca0821aef6aec26d6; ts=l0nUz7jm3irIL1fKZ9n4yJ4Y9!akTx1NfaG15GWm;',
        },
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
