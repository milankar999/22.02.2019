import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingCpoPendingDetailsComponent } from './sourcing-cpo-pending-details.component';

describe('SourcingCpoPendingDetailsComponent', () => {
  let component: SourcingCpoPendingDetailsComponent;
  let fixture: ComponentFixture<SourcingCpoPendingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingCpoPendingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingCpoPendingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
