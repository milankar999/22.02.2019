import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPurchaseContactPersonSelectionComponent } from './cash-purchase-contact-person-selection.component';

describe('CashPurchaseContactPersonSelectionComponent', () => {
  let component: CashPurchaseContactPersonSelectionComponent;
  let fixture: ComponentFixture<CashPurchaseContactPersonSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPurchaseContactPersonSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPurchaseContactPersonSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
