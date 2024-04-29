import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cardDescription } from 'src/app/modules/about/models/card-description';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private apiRoute: string = 'assets/data/';

  private readonly aboutCards: BehaviorSubject<cardDescription[]> =
    new BehaviorSubject<cardDescription[]>([]);

  aboutCards$: Observable<cardDescription[]> = this.aboutCards.asObservable();

  constructor(private httpClient: HttpClient) {}

  getAboutCards(){
    this.httpClient
      .get<cardDescription[]>(this.apiRoute + 'about.json')
      .subscribe({
        next: data => this.aboutCards.next(data),
        error: error => console.log('Error: ' +  error)
      });
  }
}
