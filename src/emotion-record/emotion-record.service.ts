import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmotionRecord } from './emotion-record.entity';

@Injectable()
export class EmotionRecordService {
  constructor(
    @InjectRepository(EmotionRecord)
    private emotionRecordRepository: Repository<EmotionRecord>,
  ) {}

  async create(record: EmotionRecord): Promise<EmotionRecord> {
    return await this.emotionRecordRepository.save(record);
  }

  async findAll(): Promise<EmotionRecord[]> {
    return await this.emotionRecordRepository.find();
  }

  async update(id: number, record: EmotionRecord): Promise<EmotionRecord> {
    const recordToUpdate = await this.emotionRecordRepository.findOne({ where: { id } });
    if (!recordToUpdate) {
      throw new NotFoundException('Record not found');
    }
    await this.emotionRecordRepository.update(id, record);
    return await this.emotionRecordRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    const recordToUpdate = await this.emotionRecordRepository.findOne({ where: { id } });
    if (!recordToUpdate) {
      throw new NotFoundException('Record not found');
    }
    await this.emotionRecordRepository.remove(recordToUpdate);
  }
}
