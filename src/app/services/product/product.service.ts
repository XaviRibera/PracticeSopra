import { Injectable } from '@angular/core';
import { Product } from '../../modules/product/interfaces/contracts/IproductContract';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  ngOnInit(){
  }

  getProducts(): void {
    this.httpClient.get<Product[]>(this.apiRoute + 'products.json').subscribe({
      next: (products: Product[]) => {
        this._products = products;
        this.products.next(this._products);
      },
      error: (error: any) => console.log('Error' + error),
    });
  }

  deleteProduct(product: Product){
    if (this._products.length > 1) {
      this._products = this._products.filter(
        (productMock) => productMock != product
      );
    }
    this.updateProducts();
  }

  insertProduct(product: Product){
    this._products.push(this.setRandomId(product));
    console.log(this._products);
    this.updateProducts();
  }

  private setRandomId(product: Product): Product{
    product.id = 'p' + (this._products.length + 1);
    console.log(product)
    return product;
  }

  private updateProducts(){
    this.products.next(this._products);
  }
}
