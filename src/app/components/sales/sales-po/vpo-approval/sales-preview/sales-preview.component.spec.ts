import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPreviewComponent } from './sales-preview.component';

describe('SalesPreviewComponent', () => {
  let component: SalesPreviewComponent;
  let fixture: ComponentFixture<SalesPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
