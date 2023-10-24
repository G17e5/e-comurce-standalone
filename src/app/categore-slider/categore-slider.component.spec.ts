import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoreSliderComponent } from './categore-slider.component';

describe('CategoreSliderComponent', () => {
  let component: CategoreSliderComponent;
  let fixture: ComponentFixture<CategoreSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoreSliderComponent]
    });
    fixture = TestBed.createComponent(CategoreSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
