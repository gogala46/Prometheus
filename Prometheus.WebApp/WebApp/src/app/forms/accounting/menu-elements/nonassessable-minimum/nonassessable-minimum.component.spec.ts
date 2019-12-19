import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonassessableMinimumComponent } from './nonassessable-minimum.component';

describe('NonassessableMinimumComponent', () => {
  let component: NonassessableMinimumComponent;
  let fixture: ComponentFixture<NonassessableMinimumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonassessableMinimumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonassessableMinimumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
