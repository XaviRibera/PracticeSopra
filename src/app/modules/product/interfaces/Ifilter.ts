export interface IfilterType {
  reset: () => void;
  expensive: () => void;
  cheap: () => void;
  priceLower: () => void;
  priceHigher: () => void;
}
