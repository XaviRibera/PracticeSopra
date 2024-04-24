import { Iproduct } from '../Iproduct';
import { Review } from '../models/Review';
import { IproductContract } from '../contracts/IproductContract';
import { IreviewContract } from '../contracts/IreviewContract';
import { SimilarProduct } from './SimilarProduct';

export class Product implements Iproduct {
  id: string;
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  favorite: boolean;
  similarProducts?: SimilarProduct[] | null;
  reviews?: Review[] | null;

  constructor(IproductContract: IproductContract) {
    this.id = IproductContract.id;
    this.product = IproductContract.product;
    this.price = IproductContract.price;
    this.currency = IproductContract.currency;
    this.rating = IproductContract.rating;
    this.description = IproductContract.description;
    this.favorite = IproductContract.favorite;
    this.similarProducts = this.toSimilarProductList(IproductContract.similarProducts);
    this.reviews = this.toReviewList(IproductContract.reviews);
  }

  toReviewList(
    ireviewContracts?: IreviewContract[] | null
  ): Review[] | null | undefined {
    return ireviewContracts?.map((reviewContrat) => new Review(reviewContrat));
  }

  toSimilarProductList(
    iproductContract?: IproductContract[] | null
  ): SimilarProduct[] | null | undefined {
    return iproductContract?.map(
      (productContract) => new SimilarProduct(productContract)
    );
  }
}
