import { Test, TestingModule } from '@nestjs/testing';
import { AdoptionsService } from './adoptions.service';
import { FollowUpsService } from 'src/follow-ups/follow-ups.service';

describe('AdoptionsService', () => {
  let service: AdoptionsService;

  const mockAdoptionRepository = {
    create: jest.fn(),
    findAllByTenant: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const mockFollowUpsService = {
    generateForAdoption: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdoptionsService,
        {
          provide: 'IAdoptionRepository',
          useValue: mockAdoptionRepository,
        },
        {
          provide: FollowUpsService,
          useValue: mockFollowUpsService,
        },
      ],
    }).compile();

    service = module.get<AdoptionsService>(AdoptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an adoption and generate follow-ups', async () => {
    const dto = { animalId: 'animal-1', adopterId: 'adopter-1' };
    const tenantId = 'tenant-1';
    const mockAdoption = {
      id: 'adoption-1',
      ...dto,
      tenantId,
      createdAt: new Date(),
      adoptionDate: null,
    };

    mockAdoptionRepository.create.mockResolvedValue(mockAdoption);
    mockFollowUpsService.generateForAdoption.mockResolvedValue({ count: 3 });

    const result = await service.create(dto, tenantId);

    expect(result).toEqual(mockAdoption);
    expect(mockAdoptionRepository.create).toHaveBeenCalledWith(dto, tenantId);
    expect(mockFollowUpsService.generateForAdoption).toHaveBeenCalledWith(
      mockAdoption.id,
      mockAdoption.createdAt,
      tenantId,
    );
  });

  it('should find all adoptions by tenant', async () => {
    const tenantId = 'tenant-1';
    const mockAdoptions = [{ id: '1' }, { id: '2' }];
    mockAdoptionRepository.findAllByTenant.mockResolvedValue(mockAdoptions);

    const result = await service.findAllByTenant(tenantId);
    expect(result).toEqual(mockAdoptions);
  });

  it('should throw NotFoundException when adoption not found', async () => {
    mockAdoptionRepository.findById.mockResolvedValue(null);

    await expect(service.findById('invalid', 'tenant-1')).rejects.toThrow(
      'Adoção com o ID "invalid" não encontrada.',
    );
  });
});
