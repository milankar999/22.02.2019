import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoReceiverInfoComponent } from './sourcing-vpo-receiver-info.component';

describe('SourcingVpoReceiverInfoComponent', () => {
  let component: SourcingVpoReceiverInfoComponent;
  let fixture: ComponentFixture<SourcingVpoReceiverInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoReceiverInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoReceiverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
