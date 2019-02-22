import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoSignatureComponent } from './sourcing-vpo-signature.component';

describe('SourcingVpoSignatureComponent', () => {
  let component: SourcingVpoSignatureComponent;
  let fixture: ComponentFixture<SourcingVpoSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
