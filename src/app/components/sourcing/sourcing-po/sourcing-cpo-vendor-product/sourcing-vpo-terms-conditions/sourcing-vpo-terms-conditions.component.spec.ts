import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoTermsConditionsComponent } from './sourcing-vpo-terms-conditions.component';

describe('SourcingVpoTermsConditionsComponent', () => {
  let component: SourcingVpoTermsConditionsComponent;
  let fixture: ComponentFixture<SourcingVpoTermsConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoTermsConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
