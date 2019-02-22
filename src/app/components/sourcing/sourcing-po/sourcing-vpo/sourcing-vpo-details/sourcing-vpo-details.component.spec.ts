import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoDetailsComponent } from './sourcing-vpo-details.component';

describe('SourcingVpoDetailsComponent', () => {
  let component: SourcingVpoDetailsComponent;
  let fixture: ComponentFixture<SourcingVpoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
