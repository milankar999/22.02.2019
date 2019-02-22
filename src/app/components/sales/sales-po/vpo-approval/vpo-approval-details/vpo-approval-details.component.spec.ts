import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpoApprovalDetailsComponent } from './vpo-approval-details.component';

describe('VpoApprovalDetailsComponent', () => {
  let component: VpoApprovalDetailsComponent;
  let fixture: ComponentFixture<VpoApprovalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpoApprovalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpoApprovalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
