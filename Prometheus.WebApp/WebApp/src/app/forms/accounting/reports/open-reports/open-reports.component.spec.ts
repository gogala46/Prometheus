import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenReportsComponent } from './open-reports.component';

describe('OpenReportsComponent', () => {
  let component: OpenReportsComponent;
  let fixture: ComponentFixture<OpenReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
