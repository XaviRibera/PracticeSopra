import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartEntry } from '../../interfaces/contracts/IcartEntryContract';
import { Product } from '../../interfaces/contracts/IproductContract';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartInUse!: CartEntry[];
  private cartSubscriptionService: Subscription | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.chargeDataBase();
  }

  addQuantityCartEntry(product: Product) {
    this.cartService.addQuantityProduct(product);
  }

  substractQuantityCarEntry(product: Product) {
    this.cartService.substractQuantityProduct(product);
  }

  deleteCartEntry(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }

  resetCart(){
    this.cartService.resetCart();
  }

  private chargeDataBase() {
    this.cartSubscriptionService = this.cartService.operativeCart$.subscribe({
      next: (cart) => {
        this.cartInUse = cart;
      },
      error: (error) => console.log('Error' + error),
    });
  }

  ngOnDestroy() {
    this.cartSubscriptionService?.unsubscribe();
  }
}
