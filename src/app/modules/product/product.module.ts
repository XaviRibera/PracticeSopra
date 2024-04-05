import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { ListViewProductComponent } from './components/list-view-product/list-view-product.component';
import { ReviewSectionComponent } from './components/review-section/review-section.component';
import { ReviewComponent } from './components/review/review.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SimilarProductSectionComponent } from './components/similar-product-section/similar-product-section.component';
import { SimilarProductComponent } from './components/similar-product/similar-product.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    DetailProductComponent,
    SimilarProductComponent,
    ReviewComponent,
    ListViewProductComponent,
    SidebarComponent,
    SimilarProductSectionComponent,
    ReviewSectionComponent,
    StarsRatingComponent,
    FilterButtonComponent,
  ],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}