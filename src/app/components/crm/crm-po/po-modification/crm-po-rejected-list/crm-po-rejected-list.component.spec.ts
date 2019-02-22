import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPoRejectedListComponent } from './crm-po-rejected-list.component';

describe('CrmPoRejectedListComponent', () => {
  let component: CrmPoRejectedListComponent;
  let fixture: ComponentFixture<CrmPoRejectedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPoRejectedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPoRejectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
