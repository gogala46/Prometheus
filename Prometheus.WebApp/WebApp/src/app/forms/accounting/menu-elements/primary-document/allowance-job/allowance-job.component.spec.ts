import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowanceJobComponent } from './allowance-job.component';

describe('AllowanceJobComponent', () => {
  let component: AllowanceJobComponent;
  let fixture: ComponentFixture<AllowanceJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowanceJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowanceJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
