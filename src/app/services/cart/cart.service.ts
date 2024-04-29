import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IcartEntry } from 'src/app/modules/product/interfaces/IcartEntry';
import { DetailProduct } from 'src/app/modules/product/interfaces/models/DetailProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _operativeCart: IcartEntry[] = [];

  private readonly operativeCart: BehaviorSubject<IcartEntry[]> =
    new BehaviorSubject<IcartEntry[]>([]);

  operativeCart$: Observable<IcartEntry[]> = this.operativeCart.asObservable();

  constructor() {}

  ngOnInit() {
    this.chargeSessionCart();
  }

  insertProductInCart(product: DetailProduct) {
    this.addProductToList(product);
    this.addQuantityProduct(product);
  }

  addProductToList(product: DetailProduct) {
    if (
      this._operativeCart.find(
        (cartEntry) => cartEntry.product.id === product.id
      )
    )
      return;
    this._operativeCart.push({ product: product, quantity: 0 });
  }

  addQuantityProduct(product: DetailProduct) {
    this._operativeCart.forEach((cartEntry) => {
      if (cartEntry.product.id === product.id) {
        cartEntry.quantity += 1;
      }
    });
    this.updateCart();
  }

  substractQuantityProduct(product: DetailProduct) {
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

  deleteProductFromCart(product: DetailProduct) {
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
