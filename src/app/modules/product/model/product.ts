import { Review } from './review';

export interface Product {
  id: string;
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  favorite?: boolean;
  similarProducts?: Product[] | null;
  reviews?: Review[] | null;
}
