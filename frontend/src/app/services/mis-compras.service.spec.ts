import { TestBed } from '@angular/core/testing';

import { MisComprasService } from './mis-compras.service';

describe('MisComprasService', () => {
  let service: MisComprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisComprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
