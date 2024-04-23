import { DetailProduct } from "./models/DetailProduct";

export interface IfilterType {
  reset: () => DetailProduct[];
  expensive: () => DetailProduct[];
  cheap: () => DetailProduct[];
  priceLower: () => DetailProduct[];
  priceHigher: () => DetailProduct[];
}
