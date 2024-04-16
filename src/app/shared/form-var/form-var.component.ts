import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-var',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-var.component.html',
  styleUrls: ['./form-var.component.scss'],
})
export class FormVarComponent {
  @Input() inputDefaultText!: string;
  @Input() buttonDefaultText!: string;
}
