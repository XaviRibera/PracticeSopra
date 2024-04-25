import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsRatingComponent } from './stars-rating.component';
import { By } from '@angular/platform-browser';

fdescribe('StarsRatingComponent', () => {
  let component: StarsRatingComponent;
  let fixture: ComponentFixture<StarsRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(StarsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter correctly max rating default options', () => {
    component.rating = 6;
    component.ngOnChanges();
    expect(component.rating).toBe(5);

    component.rating = -1;
    component.ngOnChanges();
    expect(component.rating).toBe(0);
  });

  it('should filter correctly max rating custom options', () => {
    component.rating = 6;
    component.max = 10;
    component.ngOnChanges();
    expect(component.rating).toBe(6);
  });

  it('should asign correctly the color depends the number ratio', () => {
    component.rating = 0.1;
    component.ngOnChanges();
    expect(component.templateColorRating).toMatch('text-danger');

    component.rating = 3.1;
    component.ngOnChanges();
    expect(component.templateColorRating).toMatch('text-warning');

    component.rating = 4.1;
    component.ngOnChanges();
    expect(component.templateColorRating).toMatch('text-succes');
  });

  it('should set empty star array with default rating', () => {
    expect(component.allStars).toEqual([
      'bi-star',
      'bi-star',
      'bi-star',
      'bi-star',
      'bi-star',
    ]);
  });

  it('should refill correctly the stars array', () => {
    component.rating = 3;
    component.ngOnChanges();
    expect(component.allStars).toEqual([
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-fill',
      'bi-star',
      'bi-star',
    ]);
  });

  it('should refill correctly the half star', () => {
    component.rating = 3.5;
    component.ngOnChanges();
    expect(component.allStars).toEqual([
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-fill',
      'bi-star-half',
      'bi-star',
    ]);
  });
});
