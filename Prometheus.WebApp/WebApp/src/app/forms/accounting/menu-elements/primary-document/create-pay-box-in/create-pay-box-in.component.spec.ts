import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayBoxInComponent } from './create-pay-box-in.component';

describe('CreatePayBoxInComponent', () => {
  let component: CreatePayBoxInComponent;
  let fixture: ComponentFixture<CreatePayBoxInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePayBoxInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePayBoxInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
