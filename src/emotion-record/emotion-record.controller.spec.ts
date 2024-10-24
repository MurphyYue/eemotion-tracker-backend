import { Test, TestingModule } from '@nestjs/testing';
import { EmotionRecordController } from './emotion-record.controller';

describe('EmotionRecordController', () => {
  let controller: EmotionRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmotionRecordController],
    }).compile();

    controller = module.get<EmotionRecordController>(EmotionRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
