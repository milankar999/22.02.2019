import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingPoComponent } from './sourcing-po.component';

describe('SourcingPoComponent', () => {
  let component: SourcingPoComponent;
  let fixture: ComponentFixture<SourcingPoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingPoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
