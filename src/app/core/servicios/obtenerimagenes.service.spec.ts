import { TestBed } from '@angular/core/testing';

import { ObtenerimagenesService } from './obtenerimagenes.service';

describe('ObtenerimagenesService', () => {
  let service: ObtenerimagenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerimagenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
