import { IproductContract } from '../contracts/IproductContract';
import { DetailProduct } from './DetailProduct';
import { Product } from './Product';

export class ProductList {
  products!: DetailProduct[];
  constructor(productsContractList: IproductContract[]) {
    this.products = productsContractList.map(
      (productContract) => new Product(productContract)
    );
  }
}
