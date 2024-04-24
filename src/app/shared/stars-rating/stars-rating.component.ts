import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stars-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss'],
})
export class StarsRatingComponent implements OnChanges {
  @Input() rating!: number;
  @Input() max: number = 5;
  min: number = 0;
  truncRating!: number;
  allStars!: string[];
  templateColorRating!: string;
  colorRanges: Map<number, string> = new Map<number, string>([
    [5, 'text-success'],
    [4, 'text-warning'],
    [3, 'text-danger'],
  ]);

  constructor() {
    this.setEmptyStarsInAllStars();
  }

  ngOnChanges() {
    this.rating = this.topAndMinFilter(this.rating);
    this.truncRating = this.calculateFillStars();
    this.changeStarColor();
    this.refillFillStars();
  }

  private topAndMinFilter(rating: number): number {
    if (rating >= this.min && rating <= this.max) return rating;
    return rating - this.max > this.min ? this.max : this.min;
  }

  private changeStarColor() {
    this.colorRanges.forEach((value, key) => {
      if (this.rating <= key) {
        this.templateColorRating = value;
        return;
      }
    });
  }

  private setEmptyStarsInAllStars() {
    this.allStars = new Array(this.max).fill('bi-star');
  }

  private refillFillStars() {
    this.setEmptyStarsInAllStars();
    this.setFillStars();
    this.setHalfStar();
  }

  private setFillStars() {
    this.allStars.fill('bi-star-fill', 0, this.truncRating);
  }

  private setHalfStar() {
    if (this.rating - this.truncRating > 0) {
      this.allStars[this.truncRating] = 'bi-star-half';
    }
  }

  private calculateFillStars(): number {
    return Math.trunc(this.rating);
  }
}
