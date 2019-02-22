import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnTraditionalPoListComponent } from './grn-traditional-po-list.component';

describe('GrnTraditionalPoListComponent', () => {
  let component: GrnTraditionalPoListComponent;
  let fixture: ComponentFixture<GrnTraditionalPoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnTraditionalPoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnTraditionalPoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
