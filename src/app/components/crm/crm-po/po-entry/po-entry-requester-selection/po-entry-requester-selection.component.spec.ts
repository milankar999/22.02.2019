import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoEntryRequesterSelectionComponent } from './po-entry-requester-selection.component';

describe('PoEntryRequesterSelectionComponent', () => {
  let component: PoEntryRequesterSelectionComponent;
  let fixture: ComponentFixture<PoEntryRequesterSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoEntryRequesterSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoEntryRequesterSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
