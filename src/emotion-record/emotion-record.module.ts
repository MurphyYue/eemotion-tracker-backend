import { Module } from '@nestjs/common';
import { EmotionRecordService } from './emotion-record.service';
import { EmotionRecordController } from './emotion-record.controller';

@Module({
  providers: [EmotionRecordService],
  controllers: [EmotionRecordController]
})
export class EmotionRecordModule {}
