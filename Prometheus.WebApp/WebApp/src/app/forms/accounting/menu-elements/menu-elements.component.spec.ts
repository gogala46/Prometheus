import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuElementsComponent } from './menu-elements.component';

describe('MenuElementsComponent', () => {
  let component: MenuElementsComponent;
  let fixture: ComponentFixture<MenuElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
