import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoRequesterInfoComponent } from './sourcing-vpo-requester-info.component';

describe('SourcingVpoRequesterInfoComponent', () => {
  let component: SourcingVpoRequesterInfoComponent;
  let fixture: ComponentFixture<SourcingVpoRequesterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoRequesterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoRequesterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
