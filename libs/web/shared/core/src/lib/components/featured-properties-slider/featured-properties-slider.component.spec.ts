import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPropertiesSliderComponent } from './featured-properties-slider.component';

describe('FeaturedPropertiesSliderComponent', () => {
  let component: FeaturedPropertiesSliderComponent;
  let fixture: ComponentFixture<FeaturedPropertiesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedPropertiesSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPropertiesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
