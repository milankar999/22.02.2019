import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnWithoutPoSelectedLineitemsComponent } from './grn-without-po-selected-lineitems.component';

describe('GrnWithoutPoSelectedLineitemsComponent', () => {
  let component: GrnWithoutPoSelectedLineitemsComponent;
  let fixture: ComponentFixture<GrnWithoutPoSelectedLineitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnWithoutPoSelectedLineitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnWithoutPoSelectedLineitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
