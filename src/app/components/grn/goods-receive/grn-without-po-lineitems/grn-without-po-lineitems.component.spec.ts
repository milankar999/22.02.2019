import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnWithoutPoLineitemsComponent } from './grn-without-po-lineitems.component';

describe('GrnWithoutPoLineitemsComponent', () => {
  let component: GrnWithoutPoLineitemsComponent;
  let fixture: ComponentFixture<GrnWithoutPoLineitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnWithoutPoLineitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnWithoutPoLineitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
