import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/models/Product';
import { DetailProduct } from '../../interfaces/models/DetailProduct';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() productsList!: DetailProduct[];
  @Input() filtersList!: string[];
  @Input() activeFilter!: string;
  @Output() changeFilterPipe: EventEmitter<string> = new EventEmitter();
  @Output() showProductPipe: EventEmitter<DetailProduct> = new EventEmitter();

  onChangeFilter(filter: string) {
    this.activeFilter = filter === 'reset' ? '' : filter;
    this.changeFilterPipe.emit(filter);
  }

  showProduct(product: DetailProduct) {
    this.showProductPipe.emit(product);
  }
}
