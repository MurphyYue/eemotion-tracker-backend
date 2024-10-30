import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { EntityManager, Repository } from 'typeorm';
import { Record } from './entities/record.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(Record)
    private readonly recordRepository: Repository<Record>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createRecordDto: CreateRecordDto) {
    const record = new Record(createRecordDto);
    await this.entityManager.save(record);
  }

  async findAll() {
    return await this.recordRepository.find();
  }

  async findOne(id: number) {
    return await this.recordRepository.findOne({ where: { id } });
  }

  async update(id: number, updateRecordDto: UpdateRecordDto) {
    const record = await this.recordRepository.findOne({ where: { id } });
    if (!record) {
      throw new Error('Record not found');
    }
    Object.assign(record, updateRecordDto);
    await this.entityManager.save(record);
  }

  async remove(id: number) {
    const record = await this.recordRepository.findOne({ where: { id } });
    if (!record) {
      throw new Error('Record not found');
    }
    await this.entityManager.remove(record);
  }
}
