import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent {
  @Input() filterType!: string;
  @Input() isPicked: boolean = false;
  @Output() changeFilter: EventEmitter<string> = new EventEmitter();

  onChangeFilter(){
    this.changeFilter.emit(this.isPicked ? 'reset' : this.filterType);
  }
}
