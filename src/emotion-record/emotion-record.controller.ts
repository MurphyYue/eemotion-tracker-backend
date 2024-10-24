import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { EmotionRecordService } from './emotion-record.service';
import { EmotionRecord } from './emotion-record.entity';

@Controller('emotion-records')
export class EmotionRecordController {
  constructor(private readonly emotionRecordService: EmotionRecordService) {}

  @Post()
  create(@Body() record: EmotionRecord) {
    return this.emotionRecordService.create(record);
  }

  @Get()
  findAll() {
    return this.emotionRecordService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() record: EmotionRecord) {
    return this.emotionRecordService.update(id, record);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.emotionRecordService.remove(id);
  }
}
