import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesMenuButtonComponent } from './favorites-menu-button.component';

describe('FavoritesMenuButtonComponent', () => {
  let component: FavoritesMenuButtonComponent;
  let fixture: ComponentFixture<FavoritesMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesMenuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
