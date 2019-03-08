import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingCpoVendorProductProceedComponent } from './sourcing-cpo-vendor-product-proceed.component';

describe('SourcingCpoVendorProductProceedComponent', () => {
  let component: SourcingCpoVendorProductProceedComponent;
  let fixture: ComponentFixture<SourcingCpoVendorProductProceedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingCpoVendorProductProceedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingCpoVendorProductProceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
