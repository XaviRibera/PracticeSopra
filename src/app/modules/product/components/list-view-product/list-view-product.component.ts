import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailProduct } from '../../interfaces/models/DetailProduct';

@Component({
  selector: 'app-list-view-product',
  templateUrl: './list-view-product.component.html',
  styleUrls: ['./list-view-product.component.scss'],
})
export class ListViewProductComponent {
  @Input() product!: DetailProduct;
  @Output() showProduct: EventEmitter<DetailProduct> = new EventEmitter();

  isSelected: boolean = false;

  listViewProductClicked(product: DetailProduct) {
    this.isSelected = true;
    this.showProduct.emit(product);
  }
}
