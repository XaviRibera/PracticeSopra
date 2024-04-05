
export interface FilterType {
  reset: () => void;
  expensive: () => void;
  cheap: () => void;
  priceLower: () => void;
  priceHigher: () => void;
}
