import { Component, Input } from '@angular/core';
import { cardDescription } from '../../models/card-description';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrls: ['./description-card.component.scss']
})
export class DescriptionCardComponent {
  @Input() cardDescription!: cardDescription;
}
