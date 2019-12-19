import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFactureComponent } from './account-facture.component';

describe('AccountFactureComponent', () => {
  let component: AccountFactureComponent;
  let fixture: ComponentFixture<AccountFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
