import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartService } from 'src/app/services/cart/cart.service';
import { Observable, of } from 'rxjs';
import { IcartEntry } from '../../interfaces/IcartEntry';
import { DetailProduct } from '../../interfaces/models/DetailProduct';
import { CartListViewProductComponent } from '../../components/cart-list-view-product/cart-list-view-product.component';

fdescribe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let service: CartService;
  const cartServiceMock = {
    operativeCart$: of([
      {
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
        quantity: 1,
      },
    ]),
    insertProductInCart: (product: DetailProduct) => {},
    addProductToList: (product: DetailProduct) => {},
    addQuantityProduct: (product: DetailProduct) => {},
    substractQuantityProduct: (product: DetailProduct) => {},
    deleteProductFromCart: (product: DetailProduct) => {},
    resetCart: (product: DetailProduct) => {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent, CartListViewProductComponent],
      providers: [{ provide: CartService, useValue: cartServiceMock }],
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call to get the cart', () => {
    const expectedCart = [
      {
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
        quantity: 1,
      },
    ];

    component.ngOnInit();
    expect(component.cartInUse).toEqual(expectedCart);
  });

  it('should call ')
});
