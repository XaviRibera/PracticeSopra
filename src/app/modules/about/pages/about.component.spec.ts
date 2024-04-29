import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { AboutModule } from '../about.module';
import { InfoSectionComponent } from '../components/info-section/info-section.component';
import { AboutSectionComponent } from '../components/about-section/about-section.component';
import { Observable, of, throwError } from 'rxjs';
import { AboutService } from 'src/app/services/about/about.service';
import { cardDescription } from '../models/card-description';

fdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let service: AboutService;
  const aboutServiceMock = {
    aboutCards$: of([{ title: 'Mock', img: 'mock.png', description: 'mock' }]),
    getAboutCards: () => {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        InfoSectionComponent,
        AboutSectionComponent,
      ],
      imports: [AboutModule],
      providers: [{ provide: AboutService, useValue: aboutServiceMock }],
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AboutService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get correctly the cardAbout from aboutService', () => {
    const expectedCardAboutListTest: cardDescription[] = [
      { title: 'Mock', img: 'mock.png', description: 'mock' },
    ];

    expect(component.cardAbout).toEqual(expectedCardAboutListTest);
  })

  it('should shout error when the subscription goes bad', () => {
    service.aboutCards$ = throwError(() => new Error('subscription in test failed'));
    const consoleSpy = spyOn(console,'log');

    component.ngOnInit();

    expect(consoleSpy).toHaveBeenCalled();
  })
});
