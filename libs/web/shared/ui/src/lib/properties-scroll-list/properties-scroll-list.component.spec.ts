import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesScrollListComponent } from './properties-scroll-list.component';

describe('PropertiesScrollListComponent', () => {
  let component: PropertiesScrollListComponent;
  let fixture: ComponentFixture<PropertiesScrollListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesScrollListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesScrollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
