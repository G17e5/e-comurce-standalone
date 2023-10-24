import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBrandComponent } from './model-brand.component';

describe('ModelBrandComponent', () => {
  let component: ModelBrandComponent;
  let fixture: ComponentFixture<ModelBrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelBrandComponent]
    });
    fixture = TestBed.createComponent(ModelBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
