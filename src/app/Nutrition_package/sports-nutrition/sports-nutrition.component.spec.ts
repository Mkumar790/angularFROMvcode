import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsNutritionComponent } from './sports-nutrition.component';

describe('SportsNutritionComponent', () => {
  let component: SportsNutritionComponent;
  let fixture: ComponentFixture<SportsNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsNutritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
