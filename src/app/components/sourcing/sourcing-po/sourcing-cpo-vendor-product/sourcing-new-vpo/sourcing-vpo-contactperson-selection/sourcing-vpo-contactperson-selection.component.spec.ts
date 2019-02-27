import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoContactpersonSelectionComponent } from './sourcing-vpo-contactperson-selection.component';

describe('SourcingVpoContactpersonSelectionComponent', () => {
  let component: SourcingVpoContactpersonSelectionComponent;
  let fixture: ComponentFixture<SourcingVpoContactpersonSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoContactpersonSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoContactpersonSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
