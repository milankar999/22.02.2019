import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPoApprovalListComponent } from './sales-po-approval-list.component';

describe('SalesPoApprovalListComponent', () => {
  let component: SalesPoApprovalListComponent;
  let fixture: ComponentFixture<SalesPoApprovalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPoApprovalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPoApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
