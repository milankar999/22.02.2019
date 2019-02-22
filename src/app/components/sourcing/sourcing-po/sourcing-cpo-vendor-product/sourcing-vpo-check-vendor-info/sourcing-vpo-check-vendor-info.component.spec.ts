import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoCheckVendorInfoComponent } from './sourcing-vpo-check-vendor-info.component';

describe('SourcingVpoCheckVendorInfoComponent', () => {
  let component: SourcingVpoCheckVendorInfoComponent;
  let fixture: ComponentFixture<SourcingVpoCheckVendorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoCheckVendorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoCheckVendorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
