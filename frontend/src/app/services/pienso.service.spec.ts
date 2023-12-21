import { TestBed } from '@angular/core/testing';

import { PiensoService } from './pienso.service';

describe('PiensoService', () => {
  let service: PiensoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiensoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
