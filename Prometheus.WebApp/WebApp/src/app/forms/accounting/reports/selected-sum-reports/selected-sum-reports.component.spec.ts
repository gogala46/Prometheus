import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSumReportsComponent } from './selected-sum-reports.component';

describe('SelectedSumReportsComponent', () => {
  let component: SelectedSumReportsComponent;
  let fixture: ComponentFixture<SelectedSumReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedSumReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSumReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
