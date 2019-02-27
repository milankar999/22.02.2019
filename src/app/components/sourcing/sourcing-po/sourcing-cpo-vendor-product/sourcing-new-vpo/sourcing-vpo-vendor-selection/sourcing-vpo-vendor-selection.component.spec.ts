import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoVendorSelectionComponent } from './sourcing-vpo-vendor-selection.component';

describe('SourcingVpoVendorSelectionComponent', () => {
  let component: SourcingVpoVendorSelectionComponent;
  let fixture: ComponentFixture<SourcingVpoVendorSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoVendorSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoVendorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
