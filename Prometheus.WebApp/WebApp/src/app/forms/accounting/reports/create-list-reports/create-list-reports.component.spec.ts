import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListReportsComponent } from './create-list-reports.component';

describe('CreateListReportsComponent', () => {
  let component: CreateListReportsComponent;
  let fixture: ComponentFixture<CreateListReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateListReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
