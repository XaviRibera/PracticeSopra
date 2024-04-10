import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FormVarComponent } from 'src/app/shared/form-var/form-var.component';
import { DescriptionCardComponent } from './components/description-card/description-card.component';
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [
    AboutComponent,
    InfoSectionComponent,
    AboutSectionComponent,
    FormVarComponent,
    DescriptionCardComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
