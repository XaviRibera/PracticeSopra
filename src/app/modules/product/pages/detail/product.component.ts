import { Component } from '@angular/core';
import { IfilterType } from '../../interfaces/Ifilter';
import { Product } from '../../interfaces/models/Product';
import { ProductService } from 'src/app/services/product/product.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductList } from '../../interfaces/models/ProductList';
import { DetailProduct } from '../../interfaces/models/DetailProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  title = 'shop';
  PRODUCTS: ProductList = new ProductList([]);
  productsWithFilter: DetailProduct[] = [];
  productInUse!: DetailProduct;
  defaultIndexProduct: number = 0;
  activeFilter!: string;
  filtersList: string[] = [
    'expensive',
    'cheap',
    'priceLower',
    'priceHigher',
    'reset',
  ];

  private productServiceSubscription: Subscription | null = null;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.chargeDataBase();
  }

  showProduct(product: DetailProduct) {
    this.productInUse = product;
  }

  showFirstProductInList() {
    this.showProduct(this.productsWithFilter[this.defaultIndexProduct]);
  }

  addToCart(product: DetailProduct) {
    this.cartService.insertProductInCart(product);
  }

  deleteProduct(product: DetailProduct) {
    this.productService.deleteProduct(product);
    this.resetFilter();
  }

  changeFavorite(product: DetailProduct) {
    product.favorite = !product.favorite;
  }

  applyFilter(filter: string) {
    this.productsWithFilter = this.PRODUCTS.applyFilter(filter);
    this.activeFilter = filter === 'reset' ? '' : filter;
    this.checkProductWithFilterList();
  }

  private checkProductWithFilterList() {
    this.productsWithFilter.length === 0
      ? () => {
          this.applyFilter('reset');
          this.activeFilter = '';
        }
      : this.showFirstProductInList();
  }

  private resetFilter() {
    this.activeFilter = '';
    this.productsWithFilter = this.PRODUCTS.applyFilter('reset');
    this.showFirstProductInList();
  }

  private chargeDataBase() {
    //this.productService.getProducts();
    this.productServiceSubscription = this.productService.products$.subscribe({
      next: (value) => {
        this.PRODUCTS = value;
        this.resetFilter();
        console.log(this.PRODUCTS)
      },
      error: (error) => console.log('Error: ' + error),
    });
  }

  ngOnDestroy() {
    this.productServiceSubscription?.unsubscribe();
  }
}
