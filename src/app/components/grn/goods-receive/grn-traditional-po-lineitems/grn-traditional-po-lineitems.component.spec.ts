import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnTraditionalPoLineitemsComponent } from './grn-traditional-po-lineitems.component';

describe('GrnTraditionalPoLineitemsComponent', () => {
  let component: GrnTraditionalPoLineitemsComponent;
  let fixture: ComponentFixture<GrnTraditionalPoLineitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnTraditionalPoLineitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnTraditionalPoLineitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
