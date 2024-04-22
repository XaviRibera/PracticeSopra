import { IproductContract } from '../contracts/IproductContract';
import { Product } from './Product';

export class ProductList {
  products!: Product[];
  constructor(productsContractList: IproductContract[]) {
    this.products = productsContractList.map(
      (productContract) => new Product(productContract)
    );
  }
}
