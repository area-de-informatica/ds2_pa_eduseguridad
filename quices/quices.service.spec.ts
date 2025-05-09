import { Test, TestingModule } from '@nestjs/testing';
import { QuicesService } from './quices.service';

describe('QuicesService', () => {
  let service: QuicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuicesService],
    }).compile();

    service = module.get<QuicesService>(QuicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
