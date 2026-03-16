import { Test, TestingModule } from '@nestjs/testing';
import { FollowUpsController } from './follow-ups.controller';
import { FollowUpsService } from './follow-ups.service';

describe('FollowUpsController', () => {
  let controller: FollowUpsController;

  const mockFollowUpsService = {
    findAllByTenant: jest.fn(),
    findById: jest.fn(),
    findByAdoption: jest.fn(),
    findPendingByDate: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowUpsController],
      providers: [
        {
          provide: FollowUpsService,
          useValue: mockFollowUpsService,
        },
      ],
    }).compile();

    controller = module.get<FollowUpsController>(FollowUpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
