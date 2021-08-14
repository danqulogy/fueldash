import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSearchFormComponent } from './simple-search-form.component';

describe('SimpleSearchFormComponent', () => {
  let component: SimpleSearchFormComponent;
  let fixture: ComponentFixture<SimpleSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
