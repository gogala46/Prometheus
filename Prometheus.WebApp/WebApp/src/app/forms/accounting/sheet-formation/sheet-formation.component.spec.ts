import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetFormationComponent } from './sheet-formation.component';

describe('SheetFormationComponent', () => {
  let component: SheetFormationComponent;
  let fixture: ComponentFixture<SheetFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
