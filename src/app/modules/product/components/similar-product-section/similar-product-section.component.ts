import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-similar-product-section',
  templateUrl: './similar-product-section.component.html',
  styleUrls: ['./similar-product-section.component.scss'],
})
export class SimilarProductSectionComponent {
  @Input() product!: Product;
}