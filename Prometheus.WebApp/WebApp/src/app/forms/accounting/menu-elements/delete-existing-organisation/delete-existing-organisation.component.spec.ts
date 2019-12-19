import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExistingOrganisationComponent } from './delete-existing-organisation.component';

describe('DeleteExistingOrganisationComponent', () => {
  let component: DeleteExistingOrganisationComponent;
  let fixture: ComponentFixture<DeleteExistingOrganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteExistingOrganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExistingOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
