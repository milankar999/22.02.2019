import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnHomeComponent } from './grn-home.component';

describe('GrnHomeComponent', () => {
  let component: GrnHomeComponent;
  let fixture: ComponentFixture<GrnHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
