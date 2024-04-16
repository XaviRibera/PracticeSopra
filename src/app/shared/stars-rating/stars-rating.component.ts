import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-stars-rating',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss'],
})
export class StarsRatingComponent {
  @Input() object!: any;
  truncRating!: number;
  allStars!: string[];
  templateColorRating!: string;
  colorRanges: Map<number, string> = new Map();

  constructor() {
    this.setColorRanges();
    this.setEmptyStarsInAllStars();
  }

  private setColorRanges() {
    this.setKeyValueInHashMap(5, 'text-success');
    this.setKeyValueInHashMap(4, 'text-warning');
    this.setKeyValueInHashMap(3, 'text-danger');
  }

  private setKeyValueInHashMap(key: number, value: string) {
    this.colorRanges.set(key, value);
  }

  private ngOnChanges() {
    this.truncRating = this.calculateFillStars();
    this.changeStarColor();
    this.refillFillStars();
  }

  private changeStarColor() {
    this.colorRanges.forEach((value, key) => {
      if (this.object.rating <= key) {
        this.templateColorRating = value;
        return;
      }
    });
  }

  private setEmptyStarsInAllStars() {
    this.allStars = new Array(5).fill('bi-star');
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
    if (this.object.rating - this.truncRating > 0) {
      this.allStars[this.truncRating] = 'bi-star-half';
    }
  }

  private calculateFillStars(): number {
    return Math.trunc(this.object.rating);
  }
}
