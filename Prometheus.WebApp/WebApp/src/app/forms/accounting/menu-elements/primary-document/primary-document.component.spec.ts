import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryDocumentComponent } from './primary-document.component';

describe('PrimaryDocumentComponent', () => {
  let component: PrimaryDocumentComponent;
  let fixture: ComponentFixture<PrimaryDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
