import { Component } from '@angular/core';
import { IfilterType } from '../../interfaces/Ifilter';
import { Product } from '../../interfaces/models/Product';
import { ProductService } from 'src/app/services/product/product.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductList } from '../../interfaces/models/ProductList';
import { DetailProduct } from '../../interfaces/models/DetailProduct';

type filters = 'reset' | 'expensive' | 'cheap' | 'priceLower';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  title = 'shop';
  PRODUCTS: ProductList = new ProductList([]);
  productsWithFilter!: ProductList;
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
    this.showProduct(this.productsWithFilter.products[this.defaultIndexProduct]);
  }

  addToCart(product: DetailProduct) {
    this.cartService.insertProductInCart(product);
  }

  deleteProduct(product: DetailProduct) {
    this.productService.deleteProduct(product);
    this.resetFilter();
  }

  applyFilter(filter: string) {
    this.changeFilter[filter as filters]();
  }

  changeFavorite(product: DetailProduct) {
    product.favorite = !product.favorite;
  }

  private expensiveFilter() {
    this.productsWithFilter.products = this.PRODUCTS.products.filter(
      (productMock) => productMock.price > 2000
    );
    this.checkProductWithFilterList();
  }

  private cheapFilter() {
    this.productsWithFilter.products = this.PRODUCTS.products.filter(
      (productMock) => productMock.price < 2000
    );
    this.checkProductWithFilterList();
  }

  private priceLowerFilter() {
    this.productsWithFilter.products = this.PRODUCTS.products.slice().sort(
      (a, b) => a.price - b.price
    );
  }

  private priceHigherFilter() {
    this.productsWithFilter.products = this.PRODUCTS.products.slice().sort(
      (a, b) => b.price - a.price
    );
  }

  private checkProductWithFilterList() {
    this.productsWithFilter.products.length === 0
      ? this.changeFilter['reset']()
      : this.showFirstProductInList();
  }

  private resetFilter() {
    this.activeFilter = '';
    this.productsWithFilter = this.PRODUCTS;
    this.showFirstProductInList();
  }

  private chargeDataBase() {
    //this.productService.getProducts();
    this.productServiceSubscription = this.productService.products$.subscribe({
      next: (value) => {
        this.PRODUCTS = value;
        this.resetFilter();
      },
      error: (error) => console.log('Error: ' + error),
    });
  }

  private changeFilter: IfilterType = {
    reset: () => {
      this.resetFilter();
    },
    expensive: () => {
      this.expensiveFilter();
    },
    cheap: () => {
      this.cheapFilter();
    },
    priceLower: () => {
      this.priceLowerFilter();
    },
    priceHigher: () => {
      this.priceHigherFilter();
    },
  };

  ngOnDestroy() {
    this.productServiceSubscription?.unsubscribe();
  }
}
