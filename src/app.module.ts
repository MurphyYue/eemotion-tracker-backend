import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmotionRecordModule } from './emotion-record/emotion-record.module';
import { AuthModule } from './auth/auth.module';
import { GoogleStrategy } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'my_emotion_tracker',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    EmotionRecordModule,
    AuthModule,
  ],
  providers: [GoogleStrategy],
})
export class AppModule {}
