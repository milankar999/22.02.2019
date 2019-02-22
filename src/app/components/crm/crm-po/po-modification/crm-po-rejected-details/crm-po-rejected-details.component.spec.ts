import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPoRejectedDetailsComponent } from './crm-po-rejected-details.component';

describe('CrmPoRejectedDetailsComponent', () => {
  let component: CrmPoRejectedDetailsComponent;
  let fixture: ComponentFixture<CrmPoRejectedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPoRejectedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPoRejectedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
