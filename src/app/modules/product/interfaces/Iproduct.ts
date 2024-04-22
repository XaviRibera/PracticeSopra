import { Product } from './models/Product';
import { Review } from './models/Review';

export interface Iproduct {
  id: string;
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  favorite?: boolean;
  similarProducts: Product[] | null;
  reviews?: Review[] | null;
}

