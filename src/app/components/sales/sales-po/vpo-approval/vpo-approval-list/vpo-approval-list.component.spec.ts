import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpoApprovalListComponent } from './vpo-approval-list.component';

describe('VpoApprovalListComponent', () => {
  let component: VpoApprovalListComponent;
  let fixture: ComponentFixture<VpoApprovalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpoApprovalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpoApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
