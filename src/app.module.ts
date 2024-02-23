import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app/app.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './Message/message.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_URL), MessageModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
