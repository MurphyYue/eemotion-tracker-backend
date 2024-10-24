import { Test, TestingModule } from '@nestjs/testing';
import { EmotionRecordService } from './emotion-record.service';

describe('EmotionRecordService', () => {
  let service: EmotionRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmotionRecordService],
    }).compile();

    service = module.get<EmotionRecordService>(EmotionRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
