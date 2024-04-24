import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductComponent } from './detail-product.component';
import { StarsRatingComponent } from 'src/app/shared/stars-rating/stars-rating.component';
import { DetailProduct } from '../../interfaces/models/DetailProduct';

fdescribe('ProductComponent', () => {
  let component: DetailProductComponent;
  let fixture: ComponentFixture<DetailProductComponent>;
  let productMock: DetailProduct = {
    id: 'p0',
    product: 'productMock',
    price: 1,
    currency: '€',
    rating: 0,
    description: 'descriptionMock',
    favorite: false,
    similarProducts: null,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailProductComponent],
      imports: [StarsRatingComponent],
    });
    fixture = TestBed.createComponent(DetailProductComponent);
    component = fixture.componentInstance;
    component.product = productMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send the same detailProduct when you call the delete', () => {
    let expectedProduct: DetailProduct = {
      id: 'p0',
      product: 'productMock',
      price: 1,
      currency: '€',
      rating: 0,
      description: 'descriptionMock',
      favorite: false,
      similarProducts: null,
    };
    component.deleteProduct.subscribe((productToDelete: DetailProduct) =>
      expect(productToDelete).toEqual(expectedProduct)
    );
    component.onDeleteProduct()
  });

  it('should send the same detailProduct when you call the change favorite', () => {
    let expectedProduct: DetailProduct = {
      id: 'p0',
      product: 'productMock',
      price: 1,
      currency: '€',
      rating: 0,
      description: 'descriptionMock',
      favorite: false,
      similarProducts: null,
    };
    component.changeFavorite.subscribe((productToChangeFavorite: DetailProduct) =>
      expect(productToChangeFavorite).toEqual(expectedProduct)
    );
    component.onFavorite();
  });

  it('should send the same detailProduct when you call the add to cart', () => {
    let expectedProduct: DetailProduct = {
      id: 'p0',
      product: 'productMock',
      price: 1,
      currency: '€',
      rating: 0,
      description: 'descriptionMock',
      favorite: false,
      similarProducts: null,
    };
    component.addToCart.subscribe(
      (productToAddToCart: DetailProduct) =>
        expect(productToAddToCart).toEqual(expectedProduct)
    );
    component.onAddToCart();
  });
});
