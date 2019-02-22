import { TestBed } from '@angular/core/testing';

import { PoVendorService } from './po-vendor.service';

describe('PoVendorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoVendorService = TestBed.get(PoVendorService);
    expect(service).toBeTruthy();
  });
});
