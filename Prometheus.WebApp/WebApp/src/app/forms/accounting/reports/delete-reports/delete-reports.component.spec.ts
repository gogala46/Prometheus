import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReportsComponent } from './delete-reports.component';

describe('DeleteReportsComponent', () => {
  let component: DeleteReportsComponent;
  let fixture: ComponentFixture<DeleteReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
