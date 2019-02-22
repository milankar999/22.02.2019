import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpoApprovalInfoComponent } from './vpo-approval-info.component';

describe('VpoApprovalInfoComponent', () => {
  let component: VpoApprovalInfoComponent;
  let fixture: ComponentFixture<VpoApprovalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpoApprovalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpoApprovalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
