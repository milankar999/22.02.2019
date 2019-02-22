import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPoRejectedLineitemEditComponent } from './crm-po-rejected-lineitem-edit.component';

describe('CrmPoRejectedLineitemEditComponent', () => {
  let component: CrmPoRejectedLineitemEditComponent;
  let fixture: ComponentFixture<CrmPoRejectedLineitemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPoRejectedLineitemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPoRejectedLineitemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
