import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmFooterComponent } from './crm-footer.component';

describe('CrmFooterComponent', () => {
  let component: CrmFooterComponent;
  let fixture: ComponentFixture<CrmFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
