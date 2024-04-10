import { Component } from '@angular/core';
import { cardDescription } from '../models/card-description';
import { aboutData } from 'src/app/data/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  cardAbout!: cardDescription[];

  constructor(){
    this.chargeDataBase();
  }

  private chargeDataBase(){
    this.cardAbout = [...aboutData];
  }
}
