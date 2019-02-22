import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoEntryReceiverSelectionComponent } from './po-entry-receiver-selection.component';

describe('PoEntryReceiverSelectionComponent', () => {
  let component: PoEntryReceiverSelectionComponent;
  let fixture: ComponentFixture<PoEntryReceiverSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoEntryReceiverSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoEntryReceiverSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
