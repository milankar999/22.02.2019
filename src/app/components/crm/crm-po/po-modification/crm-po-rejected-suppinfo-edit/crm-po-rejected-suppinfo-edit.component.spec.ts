import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPoRejectedSuppinfoEditComponent } from './crm-po-rejected-suppinfo-edit.component';

describe('CrmPoRejectedSuppinfoEditComponent', () => {
  let component: CrmPoRejectedSuppinfoEditComponent;
  let fixture: ComponentFixture<CrmPoRejectedSuppinfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPoRejectedSuppinfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPoRejectedSuppinfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
