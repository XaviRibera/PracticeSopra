import { IcartEntry } from "../IcartEntry";
import { Product } from "./Product";

export class CartEntry implements IcartEntry{
  product: Product;
  quantity: number;

  constructor(product:Product, quantity:number){
    this.product = product;
    this.quantity = quantity;
  }
}
