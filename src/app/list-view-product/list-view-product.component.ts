import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-view-product',
  templateUrl: './list-view-product.component.html',
  styleUrls: ['./list-view-product.component.scss']
})
export class ListViewProductComponent {
  @Input() productName!: string;
  @Input() productId!: string;
  @Output() showProduct: EventEmitter<string> = new EventEmitter();

  listViewProductClicked(id:string){
    this.showProduct.emit(id);
  }
}
