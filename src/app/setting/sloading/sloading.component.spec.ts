import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloadingComponent } from './sloading.component';

describe('SloadingComponent', () => {
  let component: SloadingComponent;
  let fixture: ComponentFixture<SloadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SloadingComponent]
    });
    fixture = TestBed.createComponent(SloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
