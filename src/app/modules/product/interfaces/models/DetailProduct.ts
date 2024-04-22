import { IdetailProduct } from "../IdetailProduct";
import { Review } from "./Review";
import { SimilarProduct } from "./SimilarProduct";

export class DetailProduct implements IdetailProduct {
  id!: string;
  product!: string;
  price!: number;
  currency!: string;
  rating!: number;
  description!: string;
  favorite?: boolean | undefined;
  similarProducts!: SimilarProduct[] | null;
  reviews?: Review[] | null | undefined;

}
