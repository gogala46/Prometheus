import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyJobComponent } from './currency-job.component';

describe('CurrencyJobComponent', () => {
  let component: CurrencyJobComponent;
  let fixture: ComponentFixture<CurrencyJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
