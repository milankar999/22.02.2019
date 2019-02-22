import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnHeaderComponent } from './grn-header.component';

describe('GrnHeaderComponent', () => {
  let component: GrnHeaderComponent;
  let fixture: ComponentFixture<GrnHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
