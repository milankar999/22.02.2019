import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingVpoReviewComponent } from './sourcing-vpo-review.component';

describe('SourcingVpoReviewComponent', () => {
  let component: SourcingVpoReviewComponent;
  let fixture: ComponentFixture<SourcingVpoReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingVpoReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingVpoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
