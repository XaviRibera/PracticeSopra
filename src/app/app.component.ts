import { Component } from '@angular/core';
import { productData } from './products';
import { Product } from './model/product';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shop';
  PRODUCTS!: Product[];
  productsWithFilter!: Product[];
  productInUse!: Product;

  showProduct(productId: string) {
    let newProduct = this.productsWithFilter.find(
      (product: Product) => product.id == productId
    );
    if (newProduct) {
      this.productInUse = newProduct;
    }
  }

  deleteProduct(productId: string) {
    if (this.PRODUCTS.length > 1) {
      let index = this.PRODUCTS.findIndex(
        (product: Product) => product.id == productId
      );
      if (index !== -1) {
        this.PRODUCTS.splice(index, 1);
        this.deleteSimilarProduct(productId);
      }
      this.resetFilter();
      this.productInUse = this.productsWithFilter[0];
    }
  }

  deleteSimilarProduct(productId: string) {
    this.PRODUCTS.forEach((product) => {
      if (product.similarProducts) {
        let index = product.similarProducts.findIndex(
          (similarProduct) => similarProduct.id == productId
        );
        if (index !== -1) {
          product.similarProducts.splice(index, 1);
        }
      }
    });
  }

  applyFilter() {
    this.productsWithFilter = this.PRODUCTS;
    this.productsWithFilter = this.productsWithFilter.filter(
      (product) => product.price > 2000
    );
    if (this.productsWithFilter.length !== 0) {
      this.showProduct(this.productsWithFilter[0].id);
    } else {
      this.resetFilter();
    }
  }

  resetFilter() {
    this.productsWithFilter = this.PRODUCTS;
    this.showProduct(this.productsWithFilter[0].id);
  }

  changeRating(eventData: {productId: string, newRating: number}) {
    if (eventData.newRating < 5 || eventData.newRating > 0) {
      this.PRODUCTS[
        this.PRODUCTS.findIndex((product: Product) => product.id == eventData.productId)
      ].rating = eventData.newRating;
      this.changeSimilarProductRating(eventData.productId,eventData.newRating);
      console.log('Ranting changed');
    }
  }

  changeSimilarProductRating(productId:string, newRating:number){
    this.PRODUCTS.forEach((product) => {
      product.similarProducts?.find((similarProduct) => {
        if (similarProduct.id === productId) {
          similarProduct.rating = newRating;
        }
      });
    });
  }

  ngOnInit(): void {
    this.PRODUCTS = [...productData];
    this.productsWithFilter = this.PRODUCTS;
    this.productInUse = this.productsWithFilter[0];
  }
}
