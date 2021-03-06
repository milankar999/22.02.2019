import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceReceiveComponent } from './invoice-receive.component';

describe('InvoiceReceiveComponent', () => {
  let component: InvoiceReceiveComponent;
  let fixture: ComponentFixture<InvoiceReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
