import { TestBed } from '@angular/core/testing';

import { PoApprovalService } from './po-approval.service';

describe('PoApprovalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoApprovalService = TestBed.get(PoApprovalService);
    expect(service).toBeTruthy();
  });
});
