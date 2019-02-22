import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingHomeComponent } from './sourcing-home.component';

describe('SourcingHomeComponent', () => {
  let component: SourcingHomeComponent;
  let fixture: ComponentFixture<SourcingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
