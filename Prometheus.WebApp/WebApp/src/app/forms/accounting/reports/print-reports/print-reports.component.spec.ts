import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintReportsComponent } from './print-reports.component';

describe('PrintReportsComponent', () => {
  let component: PrintReportsComponent;
  let fixture: ComponentFixture<PrintReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
