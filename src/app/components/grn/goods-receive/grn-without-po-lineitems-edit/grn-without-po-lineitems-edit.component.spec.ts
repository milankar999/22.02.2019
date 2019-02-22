import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnWithoutPoLineitemsEditComponent } from './grn-without-po-lineitems-edit.component';

describe('GrnWithoutPoLineitemsEditComponent', () => {
  let component: GrnWithoutPoLineitemsEditComponent;
  let fixture: ComponentFixture<GrnWithoutPoLineitemsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnWithoutPoLineitemsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnWithoutPoLineitemsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
