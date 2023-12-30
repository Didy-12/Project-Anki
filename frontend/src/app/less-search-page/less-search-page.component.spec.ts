import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessSearchPageComponent } from './less-search-page.component';

describe('LessSearchPageComponent', () => {
  let component: LessSearchPageComponent;
  let fixture: ComponentFixture<LessSearchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessSearchPageComponent]
    });
    fixture = TestBed.createComponent(LessSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
