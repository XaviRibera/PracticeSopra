import { Component, Input } from '@angular/core';
import { SimilarProduct } from '../../interfaces/models/SimilarProduct';

@Component({
  selector: 'app-similar-product-form-entry',
  templateUrl: './similar-product-form-entry.component.html',
  styleUrls: ['./similar-product-form-entry.component.scss'],
})
export class SimilarProductFormEntryComponent {
  @Input() product!: SimilarProduct;


}
