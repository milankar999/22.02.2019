import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoEntrySelectedProductComponent } from './po-entry-selected-product.component';

describe('PoEntrySelectedProductComponent', () => {
  let component: PoEntrySelectedProductComponent;
  let fixture: ComponentFixture<PoEntrySelectedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoEntrySelectedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoEntrySelectedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
