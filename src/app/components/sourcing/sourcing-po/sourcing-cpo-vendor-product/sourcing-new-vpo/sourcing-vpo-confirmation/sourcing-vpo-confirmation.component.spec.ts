import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoConfirmationComponent } from './sourcing-vpo-confirmation.component';

describe('SourcingVpoConfirmationComponent', () => {
  let component: SourcingVpoConfirmationComponent;
  let fixture: ComponentFixture<SourcingVpoConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
