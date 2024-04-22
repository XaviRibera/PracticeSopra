import { Injectable } from '@angular/core';
import { IproductContract } from '../../modules/product/interfaces/contracts/IproductContract';
import { Product } from '../../modules/product/interfaces/models/Product';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductList } from 'src/app/modules/product/interfaces/models/ProductList';
import { DetailProduct } from 'src/app/modules/product/interfaces/models/DetailProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiRoute: string = 'assets/data/';

  private readonly products: BehaviorSubject<ProductList> = new BehaviorSubject<
    ProductList
  >(new ProductList([]));

  private _products!: ProductList;

  public products$: Observable<ProductList> = this.products.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getProducts();
  }

  ngOnInit() {}

  getProducts(): void {
    this.httpClient
      .get<IproductContract[]>(this.apiRoute + 'products.json')
      .pipe(map((response: IproductContract[]) => new ProductList(response)))
      .subscribe({
        next: (products: ProductList) => {
          this._products = products;
          this.products.next(this._products);
        },
        error: (error: any) => console.log('Error' + error),
      });
  }

  deleteProduct(product: DetailProduct) {
    if (this._products.products.length > 1) {
      this._products.products = this._products.products.filter(
        (productMock) => productMock != product
      );
    }
    this.updateProducts();
  }

  insertProduct(product: DetailProduct) {
    this._products.products.push(this.setRandomId(product));
    this.updateProducts();
  }

  private setRandomId(product: DetailProduct): DetailProduct {
    product.id = 'p' + (this._products.products.length + 1);
    console.log(product);
    return product;
  }

  private updateProducts() {
    this.products.next(this._products);
  }
}
