import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FzproComponent } from './fzpro.component';

describe('FzproComponent', () => {
  let component: FzproComponent;
  let fixture: ComponentFixture<FzproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FzproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FzproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
