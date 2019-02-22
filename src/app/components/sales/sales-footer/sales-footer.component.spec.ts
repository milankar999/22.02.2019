import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesFooterComponent } from './sales-footer.component';

describe('SalesFooterComponent', () => {
  let component: SalesFooterComponent;
  let fixture: ComponentFixture<SalesFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
