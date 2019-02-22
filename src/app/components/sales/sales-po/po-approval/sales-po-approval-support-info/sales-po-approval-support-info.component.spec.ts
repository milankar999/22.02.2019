import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPoApprovalSupportInfoComponent } from './sales-po-approval-support-info.component';

describe('SalesPoApprovalSupportInfoComponent', () => {
  let component: SalesPoApprovalSupportInfoComponent;
  let fixture: ComponentFixture<SalesPoApprovalSupportInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPoApprovalSupportInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPoApprovalSupportInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
