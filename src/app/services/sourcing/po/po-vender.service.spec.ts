import { TestBed } from '@angular/core/testing';

import { PoVenderService } from './po-vender.service';

describe('PoVenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoVenderService = TestBed.get(PoVenderService);
    expect(service).toBeTruthy();
  });
});
