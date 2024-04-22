import { Component, Input } from '@angular/core';
import { DetailProduct } from '../../interfaces/models/DetailProduct';

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.scss']
})
export class ReviewSectionComponent {
  @Input() product!:DetailProduct;
}
