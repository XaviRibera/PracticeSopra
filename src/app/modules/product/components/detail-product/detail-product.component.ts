import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  onDeleteProduct() {
    this.deleteProduct.emit(this.product);
  }

  onFavorite(){
    this.changeFavorite.emit(this.product);
  }

  onAddToCart(){
    this.addToCart.emit(this.product);
  }
}
