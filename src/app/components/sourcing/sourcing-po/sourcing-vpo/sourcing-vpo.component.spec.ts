import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoComponent } from './sourcing-vpo.component';

describe('SourcingVpoComponent', () => {
  let component: SourcingVpoComponent;
  let fixture: ComponentFixture<SourcingVpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
