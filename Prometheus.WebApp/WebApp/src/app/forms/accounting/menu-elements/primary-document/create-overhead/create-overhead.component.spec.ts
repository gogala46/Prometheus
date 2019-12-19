import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOverheadComponent } from './create-overhead.component';

describe('CreateOverheadComponent', () => {
  let component: CreateOverheadComponent;
  let fixture: ComponentFixture<CreateOverheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOverheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOverheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
