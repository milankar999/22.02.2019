import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPoApprovalDetailsComponent } from './sales-po-approval-details.component';

describe('SalesPoApprovalDetailsComponent', () => {
  let component: SalesPoApprovalDetailsComponent;
  let fixture: ComponentFixture<SalesPoApprovalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPoApprovalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPoApprovalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
