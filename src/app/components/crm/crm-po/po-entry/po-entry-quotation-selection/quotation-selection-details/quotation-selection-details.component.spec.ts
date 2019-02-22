import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationSelectionDetailsComponent } from './quotation-selection-details.component';

describe('QuotationSelectionDetailsComponent', () => {
  let component: QuotationSelectionDetailsComponent;
  let fixture: ComponentFixture<QuotationSelectionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationSelectionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationSelectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
