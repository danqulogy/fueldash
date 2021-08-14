import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquaredMenuItemsComponent } from './squared-menu-items.component';

describe('SquaredMenuItemsComponent', () => {
  let component: SquaredMenuItemsComponent;
  let fixture: ComponentFixture<SquaredMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquaredMenuItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquaredMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
