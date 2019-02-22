import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnTraditionalPoSelectedLineitemsComponent } from './grn-traditional-po-selected-lineitems.component';

describe('GrnTraditionalPoSelectedLineitemsComponent', () => {
  let component: GrnTraditionalPoSelectedLineitemsComponent;
  let fixture: ComponentFixture<GrnTraditionalPoSelectedLineitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnTraditionalPoSelectedLineitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnTraditionalPoSelectedLineitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
