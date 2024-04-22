import { IsimilarProduct } from "../IsimilarProduct";
import { DetailProduct } from "./DetailProduct";

export class SimilarProduct implements IsimilarProduct{
  id: string;
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  favorite?: boolean | undefined;

  constructor(detailProduct: DetailProduct){
    this.id = detailProduct.id;
    this.product = detailProduct.product;
    this. price = detailProduct.price;
    this.currency = detailProduct.currency;
    this.rating = detailProduct.rating;
    this.description = detailProduct.description;
  }
}
