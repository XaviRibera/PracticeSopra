import { Iproduct } from "./Iproduct";
import { Product } from "./models/Product";
import { Review } from "./models/Review";
import { SimilarProduct } from "./models/SimilarProduct";

export interface IdetailProduct extends Iproduct {
  similarProducts: SimilarProduct[] | null;
  reviews?: Review[] | null;
}
