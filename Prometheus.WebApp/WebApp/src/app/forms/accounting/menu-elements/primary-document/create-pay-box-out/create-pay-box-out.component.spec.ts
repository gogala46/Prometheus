import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayBoxOutComponent } from './create-pay-box-out.component';

describe('CreatePayBoxOutComponent', () => {
  let component: CreatePayBoxOutComponent;
  let fixture: ComponentFixture<CreatePayBoxOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePayBoxOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePayBoxOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
