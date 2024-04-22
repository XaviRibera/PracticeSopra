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
  @Output() deleteCartEntity: EventEmitter<DetailProduct> = new EventEmitter();

  onSubstractQuantity(product: DetailProduct) {
    this.substractQuantity.emit(product);
  }

  onAddQuantity(product: DetailProduct) {
    this.addQuantity.emit(product);
  }

  onDeleteCartEntry(product: DetailProduct) {
    this.deleteCartEntity.emit(product);
  }
}
