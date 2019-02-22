import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoListComponent } from './sourcing-vpo-list.component';

describe('SourcingVpoListComponent', () => {
  let component: SourcingVpoListComponent;
  let fixture: ComponentFixture<SourcingVpoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
