import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpoApprovalComponent } from './vpo-approval.component';

describe('VpoApprovalComponent', () => {
  let component: VpoApprovalComponent;
  let fixture: ComponentFixture<VpoApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpoApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpoApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
