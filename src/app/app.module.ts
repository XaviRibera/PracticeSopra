import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SimilarProductComponent } from './similar-product/similar-product.component';
import { ReviewComponent } from './review/review.component';
import { ListViewProductComponent } from './list-view-product/list-view-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SimilarProductSectionComponent } from './similar-product-section/similar-product-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SimilarProductComponent,
    ReviewComponent,
    ListViewProductComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SimilarProductSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
