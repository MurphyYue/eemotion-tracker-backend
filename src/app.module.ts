import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmotionRecordModule } from './emotion-record/emotion-record.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        // TODO: set to false in production
        synchronize: true,
      }),
    }),
    EmotionRecordModule,
    // AuthModule,
  ],
  // providers: [AuthService],
})
export class AppModule {}
