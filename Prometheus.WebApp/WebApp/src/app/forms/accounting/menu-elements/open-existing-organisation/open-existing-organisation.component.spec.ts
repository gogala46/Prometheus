import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenExistingOrganisationComponent } from './open-existing-organisation.component';

describe('OpenExistingOrganisationComponent', () => {
  let component: OpenExistingOrganisationComponent;
  let fixture: ComponentFixture<OpenExistingOrganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenExistingOrganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenExistingOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
