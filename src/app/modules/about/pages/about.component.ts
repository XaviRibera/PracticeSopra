import { Component } from '@angular/core';
import { cardDescription } from '../models/card-description';
import { AboutService } from 'src/app/services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  cardAbout: cardDescription[] = [];

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.chargeDataBase();
  }

  private chargeDataBase() {
    this.aboutService.getAboutCards();
    this.aboutService.aboutCards$.subscribe({
      next: data => this.cardAbout = data,
      error: error => console.log('Error' + error)
    })
  }
}
