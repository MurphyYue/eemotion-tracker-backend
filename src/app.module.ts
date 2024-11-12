import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { RecordModule } from './record/record.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    RecordModule,
    UserModule,
    // AuthModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
