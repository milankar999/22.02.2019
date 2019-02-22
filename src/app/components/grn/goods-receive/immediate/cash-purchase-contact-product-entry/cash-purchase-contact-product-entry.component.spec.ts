import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPurchaseContactProductEntryComponent } from './cash-purchase-contact-product-entry.component';

describe('CashPurchaseContactProductEntryComponent', () => {
  let component: CashPurchaseContactProductEntryComponent;
  let fixture: ComponentFixture<CashPurchaseContactProductEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPurchaseContactProductEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPurchaseContactProductEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
