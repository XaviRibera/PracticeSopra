import { Component, Input } from '@angular/core';
import { cardDescription } from '../../models/card-description';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {
  @Input() cardAbout!: cardDescription[];
}
