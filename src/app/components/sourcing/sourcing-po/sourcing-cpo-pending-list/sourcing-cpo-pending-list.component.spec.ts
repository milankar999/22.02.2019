import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingCpoPendingListComponent } from './sourcing-cpo-pending-list.component';

describe('SourcingCpoPendingListComponent', () => {
  let component: SourcingCpoPendingListComponent;
  let fixture: ComponentFixture<SourcingCpoPendingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingCpoPendingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingCpoPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
