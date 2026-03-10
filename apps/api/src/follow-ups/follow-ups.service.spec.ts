import { Test, TestingModule } from '@nestjs/testing';
import { FollowUpsService } from './follow-ups.service';

describe('FollowUpsService', () => {
  let service: FollowUpsService;

  const mockFollowUpRepository = {
    create: jest.fn(),
    createMany: jest.fn(),
    findAllByTenant: jest.fn(),
    findById: jest.fn(),
    findByAdoption: jest.fn(),
    findPendingByDate: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FollowUpsService,
        {
          provide: 'IFollowUpRepository',
          useValue: mockFollowUpRepository,
        },
      ],
    }).compile();

    service = module.get<FollowUpsService>(FollowUpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate follow-ups at 7d, 30d, 6m intervals', async () => {
    const adoptionId = 'adoption-1';
    const adoptionDate = new Date('2025-01-01');
    const tenantId = 'tenant-1';

    mockFollowUpRepository.createMany.mockResolvedValue({ count: 3 });

    const result = await service.generateForAdoption(
      adoptionId,
      adoptionDate,
      tenantId,
    );

    expect(result).toEqual({ count: 3 });
    expect(mockFollowUpRepository.createMany).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          adoptionId,
          label: 'Acompanhamento de 7 dias',
        }),
        expect.objectContaining({
          adoptionId,
          label: 'Acompanhamento de 30 dias',
        }),
        expect.objectContaining({
          adoptionId,
          label: 'Acompanhamento de 6 meses',
        }),
      ]),
      tenantId,
    );
  });

  it('should throw NotFoundException when follow-up not found', async () => {
    mockFollowUpRepository.findById.mockResolvedValue(null);

    await expect(service.findById('invalid', 'tenant-1')).rejects.toThrow(
      'Follow-up com o ID "invalid" não encontrado.',
    );
  });
});
