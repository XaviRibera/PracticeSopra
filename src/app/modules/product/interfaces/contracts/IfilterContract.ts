
export interface IfilterTypeContract {
  reset: () => void;
  expensive: () => void;
  cheap: () => void;
  priceLower: () => void;
  priceHigher: () => void;
}
