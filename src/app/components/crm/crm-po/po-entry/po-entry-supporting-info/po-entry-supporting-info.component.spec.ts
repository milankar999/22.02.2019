import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoEntrySupportingInfoComponent } from './po-entry-supporting-info.component';

describe('PoEntrySupportingInfoComponent', () => {
  let component: PoEntrySupportingInfoComponent;
  let fixture: ComponentFixture<PoEntrySupportingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoEntrySupportingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoEntrySupportingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
