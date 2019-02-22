import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoEntryQuotationSelectionComponent } from './po-entry-quotation-selection.component';

describe('PoEntryQuotationSelectionComponent', () => {
  let component: PoEntryQuotationSelectionComponent;
  let fixture: ComponentFixture<PoEntryQuotationSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoEntryQuotationSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoEntryQuotationSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});