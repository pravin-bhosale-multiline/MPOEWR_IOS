import { TestBed } from '@angular/core/testing';

import { ArvisitscheduleService } from './arvisitschedule.service';

describe('ArvisitscheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArvisitscheduleService = TestBed.get(ArvisitscheduleService);
    expect(service).toBeTruthy();
  });
});
