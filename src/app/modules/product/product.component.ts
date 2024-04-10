import { Component } from '@angular/core';
import { productData } from 'src/app/data/products';
import { FilterType } from './model/filter';
import { Product } from './model/product';

type filters = 'reset' | 'expensive' | 'cheap' | 'priceLower';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  title = 'shop';
  PRODUCTS!: Product[];
  productsWithFilter!: Product[];
  productInUse!: Product;
  defaultIndexProduct: number = 0;
  activeFilter!: string;
  filtersList: string[] = [
    'expensive',
    'cheap',
    'priceLower',
    'priceHigher',
    'reset',
  ];

  constructor() {
    this.chargeDataBase();
  }

  showProduct(product: Product) {
    this.productInUse = product;
  }

  showFirstProductInList() {
    this.showProduct(this.productsWithFilter[this.defaultIndexProduct]);
  }

  deleteProduct(product: Product) {
    if (this.PRODUCTS.length > 1) {
      this.PRODUCTS = this.PRODUCTS.filter(
        (productMock) => productMock != product
      );
      this.resetFilter();
    }
  }

  applyFilter(filter: string) {
    this.changeFilter[filter as filters]();
  }

  private expensiveFilter() {
    this.productsWithFilter = this.PRODUCTS.filter(
      (productMock) => productMock.price > 2000
    );
    this.checkProductWithFilterList();
  }

  private cheapFilter() {
    this.productsWithFilter = this.PRODUCTS.filter(
      (productMock) => productMock.price < 2000
    );
    this.checkProductWithFilterList();
  }

  private priceLowerFilter() {
    this.productsWithFilter = this.PRODUCTS.slice().sort(
      (a, b) => a.price - b.price
    );
  }

  private priceHigherFilter() {
    this.productsWithFilter = this.PRODUCTS.slice().sort(
      (a, b) => b.price - a.price
    );
  }

  private checkProductWithFilterList() {
    this.productsWithFilter.length === 0
      ? this.changeFilter['reset']()
      : this.showFirstProductInList();
  }

  private resetFilter() {
    this.activeFilter = '';
    this.productsWithFilter = this.PRODUCTS;
    this.showFirstProductInList();
  }

  changeFavorite(product: Product) {
    product.favorite = !product.favorite;
  }

  private chargeDataBase() {
    this.PRODUCTS = [...productData];
  }

  ngOnInit() {
    this.resetFilter();
  }

  private changeFilter: FilterType = {
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
}
