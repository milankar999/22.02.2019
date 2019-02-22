import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingFooterComponent } from './sourcing-footer.component';

describe('SourcingFooterComponent', () => {
  let component: SourcingFooterComponent;
  let fixture: ComponentFixture<SourcingFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
