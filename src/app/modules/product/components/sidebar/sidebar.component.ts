import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailProduct } from '../../interfaces/models/DetailProduct';
import { ProductList } from '../../interfaces/models/ProductList';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() productList: ProductList = new ProductList([]);
  @Input() filtersList: string[] = ['reset'];
  @Input() activeFilter: string = '';
  @Output() changeFilterPipe: EventEmitter<string> = new EventEmitter();
  @Output() showProductPipe: EventEmitter<DetailProduct> = new EventEmitter();

  onChangeFilter(filter: string) {
    this.changeFilterPipe.emit(filter);
  }

  onShowProduct(product: DetailProduct) {
    this.showProductPipe.emit(product);
  }
}
