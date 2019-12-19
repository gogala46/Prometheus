import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostFactureComponent } from './cost-facture.component';

describe('CostFactureComponent', () => {
  let component: CostFactureComponent;
  let fixture: ComponentFixture<CostFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
