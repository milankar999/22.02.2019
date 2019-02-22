import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPurchaseVendorSelectionComponent } from './cash-purchase-vendor-selection.component';

describe('CashPurchaseVendorSelectionComponent', () => {
  let component: CashPurchaseVendorSelectionComponent;
  let fixture: ComponentFixture<CashPurchaseVendorSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPurchaseVendorSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPurchaseVendorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
