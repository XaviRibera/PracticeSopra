import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/models/Product';
import { CartEntry } from '../../interfaces/models/CartEntry';

@Component({
  selector: 'app-cart-list-view-product',
  templateUrl: './cart-list-view-product.component.html',
  styleUrls: ['./cart-list-view-product.component.scss'],
})
export class CartListViewProductComponent {
  @Input() cartEntry!: CartEntry;
  @Output() substractQuantity: EventEmitter<Product> = new EventEmitter();
  @Output() addQuantity: EventEmitter<Product> = new EventEmitter();
  @Output() deleteCartEntity: EventEmitter<Product> = new EventEmitter();

  onSubstractQuantity(product: Product) {
    this.substractQuantity.emit(product);
  }

  onAddQuantity(product: Product) {
    this.addQuantity.emit(product);
  }

  onDeleteCartEntry(product: Product) {
    this.deleteCartEntity.emit(product);
  }
}
