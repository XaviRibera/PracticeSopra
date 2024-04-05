import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-list-view-product',
  templateUrl: './list-view-product.component.html',
  styleUrls: ['./list-view-product.component.scss'],
})
export class ListViewProductComponent {
  @Input() product!: Product;
  @Output() showProduct: EventEmitter<Product> = new EventEmitter();

  isSelected: boolean = false;

  listViewProductClicked(product: Product) {
    this.isSelected = true;
    this.showProduct.emit(product);
  }
}
