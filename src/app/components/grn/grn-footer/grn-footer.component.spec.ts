import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnFooterComponent } from './grn-footer.component';

describe('GrnFooterComponent', () => {
  let component: GrnFooterComponent;
  let fixture: ComponentFixture<GrnFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
