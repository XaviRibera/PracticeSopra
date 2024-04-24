import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { AboutModule } from '../about.module';
import { InfoSectionComponent } from '../components/info-section/info-section.component';
import { AboutSectionComponent } from '../components/about-section/about-section.component';
import { Observable } from 'rxjs';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        InfoSectionComponent,
        AboutSectionComponent,
      ],
      imports: [AboutModule],
      providers: [{ provide: AboutServiceMock, useValue: AboutMockServiceClass }],
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

const AboutServiceMock = {
  getAboutCards: ()=>{},

}
class AboutMockServiceClass {
  constructor(){}
  getAboutCards() {}
}
