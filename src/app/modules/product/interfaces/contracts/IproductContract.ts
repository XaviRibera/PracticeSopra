import { IreviewContract } from './IreviewContract';

export interface IproductContract {
  id: string;
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  favorite: boolean;
  similarProducts: IproductContract[] | null;
  reviews?: IreviewContract[] | null;
}
