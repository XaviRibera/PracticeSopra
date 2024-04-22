import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/contracts/IproductContract';

@Component({
  selector: 'app-similar-product-form-entry',
  templateUrl: './similar-product-form-entry.component.html',
  styleUrls: ['./similar-product-form-entry.component.scss'],
})
export class SimilarProductFormEntryComponent {
  @Input() product!: Product;

  constructor() {}


}
