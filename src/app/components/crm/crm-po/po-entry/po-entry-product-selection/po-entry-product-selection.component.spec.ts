import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoEntryProductSelectionComponent } from './po-entry-product-selection.component';

describe('PoEntryProductSelectionComponent', () => {
  let component: PoEntryProductSelectionComponent;
  let fixture: ComponentFixture<PoEntryProductSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoEntryProductSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoEntryProductSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
