import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent {
  @Input() product!: Product;
  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter();
  @Output() changeFavorite: EventEmitter<Product> = new EventEmitter();

  onDeleteProduct(product: Product) {
    this.deleteProduct.emit(product);
  }

  onFavorite(product:Product){
    this.changeFavorite.emit(product);
  }
}
