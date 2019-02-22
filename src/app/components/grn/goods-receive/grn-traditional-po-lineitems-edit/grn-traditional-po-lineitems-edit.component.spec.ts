import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnTraditionalPoLineitemsEditComponent } from './grn-traditional-po-lineitems-edit.component';

describe('GrnTraditionalPoLineitemsEditComponent', () => {
  let component: GrnTraditionalPoLineitemsEditComponent;
  let fixture: ComponentFixture<GrnTraditionalPoLineitemsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnTraditionalPoLineitemsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnTraditionalPoLineitemsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
