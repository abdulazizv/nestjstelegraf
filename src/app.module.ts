import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { EchoModule } from './echo/echo.module';
import { GreeterModule } from './greeter/greeter.module';
import { GreeterBotName } from './app.constants';
import { sessionMiddleware } from './middleware/session.middleware';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '5982233794:AAFq9GKdrbidL6630SkY1k9cILT-wX0Hnlw',
      include: [EchoModule],
    }),
    TelegrafModule.forRootAsync({
      botName: GreeterBotName,
      useFactory: () => ({
        token: '5623718105:AAHdEgjEqLIrnSAmZR07mbKRpZjQ1g72ldo',
        middlewares: [sessionMiddleware],
        include: [GreeterModule],
      }),
    }),
    EchoModule,
    GreeterModule,
  ],
})
export class AppModule {}
