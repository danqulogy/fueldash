import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMenuButtonComponent } from './post-menu-button.component';

describe('PostMenuButtonComponent', () => {
  let component: PostMenuButtonComponent;
  let fixture: ComponentFixture<PostMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMenuButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
