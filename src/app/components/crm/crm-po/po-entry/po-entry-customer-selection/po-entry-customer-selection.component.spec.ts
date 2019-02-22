import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoEntryCustomerSelectionComponent } from './po-entry-customer-selection.component';

describe('PoEntryCustomerSelectionComponent', () => {
  let component: PoEntryCustomerSelectionComponent;
  let fixture: ComponentFixture<PoEntryCustomerSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoEntryCustomerSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoEntryCustomerSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
