import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLocationBtnComponent } from './change-location-btn.component';

describe('ChangeLocationBtnComponent', () => {
  let component: ChangeLocationBtnComponent;
  let fixture: ComponentFixture<ChangeLocationBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLocationBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLocationBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
