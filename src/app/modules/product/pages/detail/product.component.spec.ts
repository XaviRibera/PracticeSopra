import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModule } from 'src/app/app.module';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { DetailProduct } from '../../interfaces/models/DetailProduct';
import { SimilarProductSectionComponent } from '../../components/similar-product-section/similar-product-section.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductComponent,
        SidebarComponent,
        DetailProduct,
        SimilarProductSectionComponent,
      ],
      imports: [AppModule],
      providers: [HttpClient],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
