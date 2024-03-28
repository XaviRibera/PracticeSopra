import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() deleteProduct: EventEmitter<string> = new EventEmitter();
  @Output() changeRating: EventEmitter<{productId:string,newRating:number}> = new EventEmitter();

  clickedDeleteProduct(id: string) {
    this.deleteProduct.emit(id);
  }

  clickedStarRating(productId:string, newRating:number){
    this.changeRating.emit({productId,newRating});
  }
}
