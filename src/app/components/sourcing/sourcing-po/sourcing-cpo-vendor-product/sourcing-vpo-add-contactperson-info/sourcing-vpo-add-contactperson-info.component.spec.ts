import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoAddContactpersonInfoComponent } from './sourcing-vpo-add-contactperson-info.component';

describe('SourcingVpoAddContactpersonInfoComponent', () => {
  let component: SourcingVpoAddContactpersonInfoComponent;
  let fixture: ComponentFixture<SourcingVpoAddContactpersonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoAddContactpersonInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoAddContactpersonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
