import { IfilterType } from '../Ifilter';
import { IproductContract } from '../contracts/IproductContract';
import { DetailProduct } from './DetailProduct';
import { Product } from './Product';

type filters = 'reset' | 'expensive' | 'cheap' | 'priceLower';
export class ProductList {
  all: DetailProduct[] = [];
  filtered: DetailProduct[] = [];

  constructor(productsContractList: IproductContract[]) {
    this.all = productsContractList.map(
      (productContract) => new DetailProduct(productContract)
    );
  }

  applyFilter(filter: string) {
    this.filtered = this.changeFilter[filter as filters]();
  }

  private changeFilter: IfilterType = {
    reset: () => {
      return this.all;
    },
    expensive: () => {
      return this.expensiveFilter();
    },
    cheap: () => {
      return this.cheapFilter();
    },
    priceLower: () => {
      return this.priceLowerFilter();
    },
    priceHigher: () => {
      return this.priceHigherFilter();
    },
  };

  private expensiveFilter(): DetailProduct[] {
    return this.all.filter((productMock) => productMock.price > 2000);
  }

  private cheapFilter(): DetailProduct[] {
    return this.all.filter((productMock) => productMock.price < 2000);
  }

  private priceLowerFilter(): DetailProduct[] {
    return this.all
      .slice()
      .sort(
        (productMock1, productMock2) => productMock1.price - productMock2.price
      );
  }

  private priceHigherFilter(): DetailProduct[] {
    return this.all
      .slice()
      .sort(
        (productMock1, productMock2) => productMock2.price - productMock1.price
      );
  }
}
