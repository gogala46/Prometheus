import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumTreeColapseReportsComponent } from './sum-tree-colapse-reports.component';

describe('SumTreeColapseReportsComponent', () => {
  let component: SumTreeColapseReportsComponent;
  let fixture: ComponentFixture<SumTreeColapseReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumTreeColapseReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumTreeColapseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
