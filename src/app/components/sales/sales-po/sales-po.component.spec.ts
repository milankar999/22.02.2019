import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPoComponent } from './sales-po.component';

describe('SalesPoComponent', () => {
  let component: SalesPoComponent;
  let fixture: ComponentFixture<SalesPoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
