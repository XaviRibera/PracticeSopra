import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/models/Product';

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.scss']
})
export class ReviewSectionComponent {
  @Input() product!:Product;
}
