import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductComponent } from './similar-product.component';
import { StarsRatingComponent } from 'src/app/shared/stars-rating/stars-rating.component';
import { SimilarProduct } from '../../interfaces/models/SimilarProduct';

fdescribe('SimilarProductComponent', () => {
  let component: SimilarProductComponent;
  let fixture: ComponentFixture<SimilarProductComponent>;
  let similarProductMock:SimilarProduct = {
    id: '',
    product: '',
    price: 0,
    currency: '',
    rating: 0,
    description: ''
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarProductComponent],
      imports: [StarsRatingComponent]
    });
    fixture = TestBed.createComponent(SimilarProductComponent);
    component = fixture.componentInstance;
    component.similarProduct = similarProductMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
