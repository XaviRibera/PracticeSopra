import { DetailProduct } from "./models/DetailProduct";
import { Product } from "./models/Product";

export interface IcartEntry {
  product: DetailProduct;
  quantity: number;
}
