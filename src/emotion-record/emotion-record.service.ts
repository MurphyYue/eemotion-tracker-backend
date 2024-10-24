import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmotionRecord } from './emotion-record.entity';

@Injectable()
export class EmotionRecordService {
  constructor(
    @InjectRepository(EmotionRecord)
    private emotionRecordRepository: Repository<EmotionRecord>,
  ) {}

  create(record: EmotionRecord): Promise<EmotionRecord> {
    return this.emotionRecordRepository.save(record);
  }

  findAll(): Promise<EmotionRecord[]> {
    return this.emotionRecordRepository.find();
  }

  async update(id: number, record: EmotionRecord): Promise<EmotionRecord> {
    await this.emotionRecordRepository.update(id, record);
    return this.emotionRecordRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.emotionRecordRepository.delete(id);
  }
}
