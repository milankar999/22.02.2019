import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoDeliveryInstructionComponent } from './sourcing-vpo-delivery-instruction.component';

describe('SourcingVpoDeliveryInstructionComponent', () => {
  let component: SourcingVpoDeliveryInstructionComponent;
  let fixture: ComponentFixture<SourcingVpoDeliveryInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoDeliveryInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoDeliveryInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
