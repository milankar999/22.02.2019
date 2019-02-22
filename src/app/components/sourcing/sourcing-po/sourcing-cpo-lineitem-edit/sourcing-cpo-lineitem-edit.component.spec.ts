import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingCpoLineitemEditComponent } from './sourcing-cpo-lineitem-edit.component';

describe('SourcingCpoLineitemEditComponent', () => {
  let component: SourcingCpoLineitemEditComponent;
  let fixture: ComponentFixture<SourcingCpoLineitemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingCpoLineitemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingCpoLineitemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
