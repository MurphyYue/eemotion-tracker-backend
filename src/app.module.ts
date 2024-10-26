import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmotionRecordModule } from './emotion-record/emotion-record.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EmotionRecordModule,
    DatabaseModule,
    // AuthModule,
  ],
  // providers: [AuthService],
})
export class AppModule {}
