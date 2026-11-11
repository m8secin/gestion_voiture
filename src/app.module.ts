import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoitureModule } from './voiture/voiture.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), VoitureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
