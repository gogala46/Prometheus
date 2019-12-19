import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastimesComponent } from './pastimes.component';

describe('PastimesComponent', () => {
  let component: PastimesComponent;
  let fixture: ComponentFixture<PastimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
