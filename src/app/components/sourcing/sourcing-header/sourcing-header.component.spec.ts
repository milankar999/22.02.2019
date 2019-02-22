import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingHeaderComponent } from './sourcing-header.component';

describe('SourcingHeaderComponent', () => {
  let component: SourcingHeaderComponent;
  let fixture: ComponentFixture<SourcingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
