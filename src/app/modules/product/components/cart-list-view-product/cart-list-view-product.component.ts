import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartEntry } from '../../interfaces/models/CartEntry';
import { DetailProduct } from '../../interfaces/models/DetailProduct';

@Component({
  selector: 'app-cart-list-view-product',
  templateUrl: './cart-list-view-product.component.html',
  styleUrls: ['./cart-list-view-product.component.scss'],
})
export class CartListViewProductComponent {
  @Input() cartEntry!: CartEntry;
  @Output() substractQuantity: EventEmitter<DetailProduct> = new EventEmitter();
  @Output() addQuantity: EventEmitter<DetailProduct> = new EventEmitter();
  @Output() deleteProductFromCart: EventEmitter<DetailProduct> = new EventEmitter();

  onSubstractQuantity() {
    this.substractQuantity.emit(this.cartEntry.product);
  }

  onAddQuantity() {
    this.addQuantity.emit(this.cartEntry.product);
  }

  onDeleteProductFromCart() {
    this.deleteProductFromCart.emit(this.cartEntry.product);
  }
}
