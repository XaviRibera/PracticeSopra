import { Injectable } from '@angular/core';
import { Product } from '../../modules/product/model/product';
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

  constructor(private httpClient: HttpClient) {}

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
    
  }
}
