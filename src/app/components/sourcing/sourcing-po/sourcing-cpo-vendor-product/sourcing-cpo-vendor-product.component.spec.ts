import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingCpoVendorProductComponent } from './sourcing-cpo-vendor-product.component';

describe('SourcingCpoVendorProductComponent', () => {
  let component: SourcingCpoVendorProductComponent;
  let fixture: ComponentFixture<SourcingCpoVendorProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingCpoVendorProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingCpoVendorProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
