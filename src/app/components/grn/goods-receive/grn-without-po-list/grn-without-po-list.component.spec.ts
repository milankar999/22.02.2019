import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnWithoutPoListComponent } from './grn-without-po-list.component';

describe('GrnWithoutPoListComponent', () => {
  let component: GrnWithoutPoListComponent;
  let fixture: ComponentFixture<GrnWithoutPoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnWithoutPoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnWithoutPoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
