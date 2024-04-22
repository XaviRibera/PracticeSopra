import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SimilarProduct } from '../../interfaces/models/SimilarProduct';

@Component({
  selector: 'app-similar-product',
  templateUrl: './similar-product.component.html',
  styleUrls: ['./similar-product.component.scss'],
})
export class SimilarProductComponent {
  @Input() similarProduct!: SimilarProduct;
  @Output() showProduct: EventEmitter<string> = new EventEmitter();

  clickedShowProduct(id: string) {
    this.showProduct.emit(id);
  }
}
