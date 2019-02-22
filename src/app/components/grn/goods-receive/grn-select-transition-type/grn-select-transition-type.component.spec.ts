import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnSelectTransitionTypeComponent } from './grn-select-transition-type.component';

describe('GrnSelectTransitionTypeComponent', () => {
  let component: GrnSelectTransitionTypeComponent;
  let fixture: ComponentFixture<GrnSelectTransitionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnSelectTransitionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnSelectTransitionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
