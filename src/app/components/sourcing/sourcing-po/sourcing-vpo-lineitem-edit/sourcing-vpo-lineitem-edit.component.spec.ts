import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoLineitemEditComponent } from './sourcing-vpo-lineitem-edit.component';

describe('SourcingVpoLineitemEditComponent', () => {
  let component: SourcingVpoLineitemEditComponent;
  let fixture: ComponentFixture<SourcingVpoLineitemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoLineitemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoLineitemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
