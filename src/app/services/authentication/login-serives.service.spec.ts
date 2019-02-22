import { TestBed } from '@angular/core/testing';

import { LoginSerivesService } from './login-serives.service';

describe('LoginSerivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginSerivesService = TestBed.get(LoginSerivesService);
    expect(service).toBeTruthy();
  });
});
