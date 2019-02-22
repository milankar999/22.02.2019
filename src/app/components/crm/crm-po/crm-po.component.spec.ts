import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPoComponent } from './crm-po.component';

describe('CrmPoComponent', () => {
  let component: CrmPoComponent;
  let fixture: ComponentFixture<CrmPoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
