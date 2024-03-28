import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() productsList!: Product[];
  @Output() applyFilter: EventEmitter<void> = new EventEmitter();
  @Output() resetFilter: EventEmitter<void> = new EventEmitter();
  @Output() showProduct2: EventEmitter<string> = new EventEmitter();

  clickedApplyFilter() {
    this.applyFilter.emit();
  }

  clickedResetFilter() {
    this.resetFilter.emit();
  }

  showProduct(productId: string){
    this.showProduct2.emit(productId);
  }
}
