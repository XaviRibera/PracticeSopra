import { IdetailProduct } from "../IdetailProduct";
import { IproductContract } from "../contracts/IproductContract";
import { Review } from "./Review";
import { SimilarProduct } from "./SimilarProduct";

export class DetailProduct implements IdetailProduct {
  id: string;
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  favorite: boolean | undefined;
  similarProducts: SimilarProduct[] | null;
  reviews?: Review[] | null | undefined;

  constructor(productContract: IproductContract){
    this.id = productContract.id;
    this.product = productContract.product;
    this.price = productContract.price;
    this.currency = productContract.currency;
    this.rating = productContract.rating;
    this.description = productContract.description;
    this.similarProducts = productContract.similarProducts;
    this.reviews = productContract.reviews;
  }
}
