import { Test, TestingModule } from '@nestjs/testing';
import { TenantFeatureService } from './tenant-feature.service';

describe('TenantFeatureService', () => {
  let service: TenantFeatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenantFeatureService],
    }).compile();

    service = module.get<TenantFeatureService>(TenantFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
