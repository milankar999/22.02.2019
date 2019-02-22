import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoAddBasicInfoComponent } from './sourcing-vpo-add-basic-info.component';

describe('SourcingVpoAddBasicInfoComponent', () => {
  let component: SourcingVpoAddBasicInfoComponent;
  let fixture: ComponentFixture<SourcingVpoAddBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoAddBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoAddBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
