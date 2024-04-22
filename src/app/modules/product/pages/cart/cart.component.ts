import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from '../../interfaces/models/Product';
import { CartEntry } from '../../interfaces/models/CartEntry';
import { DetailProduct } from '../../interfaces/models/DetailProduct';

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

  addQuantityCartEntry(product: DetailProduct) {
    this.cartService.addQuantityProduct(product);
  }

  substractQuantityCarEntry(product: DetailProduct) {
    this.cartService.substractQuantityProduct(product);
  }

  deleteCartEntry(product: DetailProduct) {
    this.cartService.deleteProductFromCart(product);
  }

  resetCart() {
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
