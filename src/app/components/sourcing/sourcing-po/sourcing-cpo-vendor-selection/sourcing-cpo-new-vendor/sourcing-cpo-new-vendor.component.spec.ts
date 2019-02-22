import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingCpoNewVendorComponent } from './sourcing-cpo-new-vendor.component';

describe('SourcingCpoNewVendorComponent', () => {
  let component: SourcingCpoNewVendorComponent;
  let fixture: ComponentFixture<SourcingCpoNewVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingCpoNewVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingCpoNewVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
