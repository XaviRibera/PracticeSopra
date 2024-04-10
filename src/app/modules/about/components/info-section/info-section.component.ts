import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent {
  @Input() sectionClass!: string;
  @Input() buttonDefaultText!: string;
  @Input() inputDefaultText!: string;
}
