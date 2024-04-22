import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/models/Product';

@Component({
  selector: 'app-similar-product',
  templateUrl: './similar-product.component.html',
  styleUrls: ['./similar-product.component.scss'],
})
export class SimilarProductComponent {
  @Input() similarProduct!: Product;
  @Output() showProduct: EventEmitter<string> = new EventEmitter();

  clickedShowProduct(id: string) {
    this.showProduct.emit(id);
  }
}
