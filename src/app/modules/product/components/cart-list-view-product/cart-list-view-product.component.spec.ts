import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListViewProductComponent } from './cart-list-view-product.component';
import { CartEntry } from '../../interfaces/models/CartEntry';
import { DetailProduct } from '../../interfaces/models/DetailProduct';

fdescribe('CartListViewProductComponent', () => {
  let component: CartListViewProductComponent;
  let fixture: ComponentFixture<CartListViewProductComponent>;
  let cartEntryMock: CartEntry = {
    product: {
      id: 'p0',
      product: 'productMock',
      price: 1,
      currency: '€',
      rating: 0,
      description: 'descriptionMock',
      favorite: false,
      similarProducts: null,
    },
    quantity: 0,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartListViewProductComponent],
    });
    fixture = TestBed.createComponent(CartListViewProductComponent);
    component = fixture.componentInstance;
    component.cartEntry = cartEntryMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit cartEntry product on substract quantity', () => {
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
    component.substractQuantity.subscribe(
      (productToSubstractQuantity: DetailProduct) =>
        expect(productToSubstractQuantity).toEqual(expectedProduct)
    );
    component.onSubstractQuantity();
  });

  it('should emit cartEntryProduct on add quantity', () => {
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
    component.addQuantity.subscribe((productToAddQuantity: DetailProduct) =>
      expect(productToAddQuantity).toEqual(expectedProduct)
    );
    component.onAddQuantity();
  });

  it('should emit cartEntry product on delete product from cart', () => {
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
    component.deleteProductFromCart.subscribe(
      (productToDeleteFromCart: DetailProduct) =>
        expect(productToDeleteFromCart).toEqual(expectedProduct)
    );
    component.onDeleteProductFromCart();
  });
});
