import { Test, TestingModule } from '@nestjs/testing';
import { MuralsService } from './murals.service';

describe('MuralsService', () => {
  let service: MuralsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuralsService],
    }).compile();

    service = module.get<MuralsService>(MuralsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
