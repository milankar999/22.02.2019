import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoEntryEditSelectedProductComponent } from './po-entry-edit-selected-product.component';

describe('PoEntryEditSelectedProductComponent', () => {
  let component: PoEntryEditSelectedProductComponent;
  let fixture: ComponentFixture<PoEntryEditSelectedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoEntryEditSelectedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoEntryEditSelectedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
