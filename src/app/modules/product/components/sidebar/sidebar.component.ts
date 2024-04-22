import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/contracts/IproductContract';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() productsList!: Product[];
  @Input() filtersList!: string[];
  @Input() activeFilter!: string;
  @Output() changeFilterPipe: EventEmitter<string> = new EventEmitter();
  @Output() showProductPipe: EventEmitter<Product> = new EventEmitter();

  onChangeFilter(filter: string) {
    this.activeFilter = filter === 'reset' ? '' : filter;
    this.changeFilterPipe.emit(filter);
  }

  showProduct(product: Product) {
    this.showProductPipe.emit(product);
  }
}
