import { Review } from './models/Review';

export interface Iproduct {
  id: string;
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  favorite?: boolean;
  reviews?: Review[] | null;
}

