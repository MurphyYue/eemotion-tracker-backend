import { Module } from '@nestjs/common';
import { EmotionRecordService } from './emotion-record.service';
import { EmotionRecordController } from './emotion-record.controller';
import { EmotionRecord } from './emotion-record.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmotionRecord])],
  providers: [EmotionRecordService],
  controllers: [EmotionRecordController]
})
export class EmotionRecordModule {}
