import { Test, TestingModule } from '@nestjs/testing';
import { QuicesController } from './quices.controller';
import { QuicesService } from './quices.service';

describe('QuicesController', () => {
  let controller: QuicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuicesController],
      providers: [QuicesService],
    }).compile();

    controller = module.get<QuicesController>(QuicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
