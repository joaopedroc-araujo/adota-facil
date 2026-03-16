import { Test, TestingModule } from '@nestjs/testing';
import { AdoptionsController } from './adoptions.controller';
import { AdoptionsService } from './adoptions.service';

describe('AdoptionsController', () => {
  let controller: AdoptionsController;

  const mockAdoptionsService = {
    create: jest.fn(),
    findAllByTenant: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdoptionsController],
      providers: [
        {
          provide: AdoptionsService,
          useValue: mockAdoptionsService,
        },
      ],
    }).compile();

    controller = module.get<AdoptionsController>(AdoptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
