import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsingModeSwitchComponent } from './browsing-mode-switch.component';

describe('BrowsingModeSwitchComponent', () => {
  let component: BrowsingModeSwitchComponent;
  let fixture: ComponentFixture<BrowsingModeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsingModeSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsingModeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
