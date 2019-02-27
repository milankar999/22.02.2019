import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingNewVpoComponent } from './sourcing-new-vpo.component';

describe('SourcingNewVpoComponent', () => {
  let component: SourcingNewVpoComponent;
  let fixture: ComponentFixture<SourcingNewVpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingNewVpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingNewVpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
