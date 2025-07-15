import { Test, TestingModule } from '@nestjs/testing';
import { TenantFeatureController } from './tenant-feature.controller';
import { TenantFeatureService } from './tenant-feature.service';

describe('TenantFeatureController', () => {
  let controller: TenantFeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantFeatureController],
      providers: [TenantFeatureService],
    }).compile();

    controller = module.get<TenantFeatureController>(TenantFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
