import { TestBed } from '@angular/core/testing';

import { TravelPlanService } from './travel-plan.service';

describe('TravelPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelPlanService = TestBed.get(TravelPlanService);
    expect(service).toBeTruthy();
  });
});
