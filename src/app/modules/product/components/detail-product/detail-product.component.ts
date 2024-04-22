import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/models/Product';
import { DetailProduct } from '../../interfaces/models/DetailProduct';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent {
  @Input() product!: DetailProduct;
  @Output() deleteProduct: EventEmitter<DetailProduct> = new EventEmitter();
  @Output() changeFavorite: EventEmitter<DetailProduct> = new EventEmitter();
  @Output() addToCart: EventEmitter<DetailProduct> = new EventEmitter();

  onDeleteProduct(product: DetailProduct) {
    this.deleteProduct.emit(product);
  }

  onFavorite(product:DetailProduct){
    this.changeFavorite.emit(product);
  }

  onAddToCart(product: DetailProduct){
    this.addToCart.emit(product);
  }
}
