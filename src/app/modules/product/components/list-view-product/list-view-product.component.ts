import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailProduct } from '../../interfaces/models/DetailProduct';

@Component({
  selector: 'app-list-view-product',
  templateUrl: './list-view-product.component.html',
  styleUrls: ['./list-view-product.component.scss'],
})
export class ListViewProductComponent {
  @Input() product!: DetailProduct;
  @Input() isSelected: boolean = false;
  @Output() showProduct: EventEmitter<DetailProduct> = new EventEmitter();

  onShowProduct() {
    this.showProduct.emit(this.product);
  }
}
