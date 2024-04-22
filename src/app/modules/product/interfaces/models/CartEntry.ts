import { IcartEntry } from "../IcartEntry";
import { DetailProduct } from "./DetailProduct";
import { Product } from "./Product";

export class CartEntry implements IcartEntry{
  product: DetailProduct;
  quantity: number;

  constructor(product:DetailProduct, quantity:number){
    this.product = product;
    this.quantity = quantity;
  }
}
