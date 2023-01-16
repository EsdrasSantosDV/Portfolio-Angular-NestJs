import { Test, TestingModule } from '@nestjs/testing';
import { MuralsController } from './murals.controller';
import { MuralsService } from './murals.service';

describe('MuralsController', () => {
  let controller: MuralsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MuralsController],
      providers: [MuralsService],
    }).compile();

    controller = module.get<MuralsController>(MuralsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
