import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoTypeEntryComponent } from './po-type-entry.component';

describe('PoTypeEntryComponent', () => {
  let component: PoTypeEntryComponent;
  let fixture: ComponentFixture<PoTypeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoTypeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoTypeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
