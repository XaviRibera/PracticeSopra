import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartEntry } from 'src/app/modules/product/model/cartEntry';
import { Product } from 'src/app/modules/product/model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _operativeCart: CartEntry[] = [];

  private readonly operativeCart: BehaviorSubject<CartEntry[]> =
    new BehaviorSubject<CartEntry[]>([]);

  operativeCart$: Observable<CartEntry[]> = this.operativeCart.asObservable();

  constructor() {
    this.chargeSessionCart();
  }

  insertProductInCart(product: Product) {
    this.addProductToList(product);
    this.addQuantityProduct(product);
  }

  addProductToList(product: Product) {
    if (
      this._operativeCart.find(
        (cartEntry) => cartEntry.product.id === product.id
      )
    )
      return;
    this._operativeCart.push({ product: product, quantity: 0 });
  }

  addQuantityProduct(product: Product) {
    this._operativeCart.forEach((cartEntry) => {
      if (cartEntry.product.id === product.id) {
        cartEntry.quantity += 1;
      }
    });
    this.updateCart();
  }

  substractQuantityProduct(product: Product) {
    let currentQuantity = this._operativeCart.find(
      (cartEntry) => cartEntry.product.id === product.id
    )?.quantity;
    if (currentQuantity === 1) {
      this.deleteProductFromCart(product);
      this.updateCart();
      return;
    }
    this._operativeCart.forEach((cartEntry) => {
      if (cartEntry.product.id === product.id) {
        cartEntry.quantity -= 1;
      }
    });
    this.updateCart();
  }

  deleteProductFromCart(product: Product) {
    this._operativeCart = this._operativeCart.filter(
      (cartEntryMock) => cartEntryMock.product.id !== product.id
    );
    this.updateCart();
  }

  resetCart() {
    this._operativeCart = [];
    this.updateCart();
  }

  private chargeSessionCart() {
    const valor = sessionStorage.getItem('cart');
    valor && (this._operativeCart = JSON.parse(valor));
    this.operativeCart.next(this._operativeCart);
  }
  
  private updateCart() {
    sessionStorage.setItem('cart', JSON.stringify(this._operativeCart));
    this.operativeCart.next(this._operativeCart);
  }
}
