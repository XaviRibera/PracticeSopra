import { Injectable } from '@angular/core';
import { IproductContract } from '../../modules/product/interfaces/contracts/IproductContract';
import { Product } from '../../modules/product/interfaces/models/Product';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductList } from 'src/app/modules/product/interfaces/models/ProductList';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiRoute: string = 'assets/data/';

  private readonly products: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);

  private _products: Product[] = [];

  public products$: Observable<Product[]> = this.products.asObservable();

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
          this._products = products.products;
          this.products.next(this._products);
        },
        error: (error: any) => console.log('Error' + error),
      });
  }

  deleteProduct(product: Product) {
    if (this._products.length > 1) {
      this._products = this._products.filter(
        (productMock) => productMock != product
      );
    }
    this.updateProducts();
  }

  insertProduct(product: Product) {
    this._products.push(this.setRandomId(product));
    console.log(this._products);
    this.updateProducts();
  }

  private setRandomId(product: Product): Product {
    product.id = 'p' + (this._products.length + 1);
    console.log(product);
    return product;
  }

  private updateProducts() {
    this.products.next(this._products);
  }
}
