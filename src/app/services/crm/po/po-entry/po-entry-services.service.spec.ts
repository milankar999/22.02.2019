import { TestBed } from '@angular/core/testing';

import { PoEntryServicesService } from './po-entry-services.service';

describe('PoEntryServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoEntryServicesService = TestBed.get(PoEntryServicesService);
    expect(service).toBeTruthy();
  });
});
