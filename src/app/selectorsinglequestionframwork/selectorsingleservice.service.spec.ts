import { TestBed } from '@angular/core/testing';

import { SelectorsingleserviceService } from './selectorsingleservice.service';

describe('SelectorsingleserviceService', () => {
  let service: SelectorsingleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectorsingleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
