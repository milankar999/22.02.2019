import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingCpoVendorSelectionComponent } from './sourcing-cpo-vendor-selection.component';

describe('SourcingCpoVendorSelectionComponent', () => {
  let component: SourcingCpoVendorSelectionComponent;
  let fixture: ComponentFixture<SourcingCpoVendorSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingCpoVendorSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingCpoVendorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
