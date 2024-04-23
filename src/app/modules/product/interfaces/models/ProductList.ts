import { IfilterType } from '../Ifilter';
import { IproductContract } from '../contracts/IproductContract';
import { DetailProduct } from './DetailProduct';
import { Product } from './Product';

type filters = 'reset' | 'expensive' | 'cheap' | 'priceLower';
export class ProductList {
  products!: DetailProduct[];
  constructor(productsContractList: IproductContract[]) {
    this.products = productsContractList.map(
      (productContract) => new DetailProduct(productContract)
    );
  }

  applyFilter(filter: string): DetailProduct[] {
    return this.changeFilter[filter as filters]();
  }

  private changeFilter: IfilterType = {
    reset: () => {
      return this.resetFilter();
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

  private resetFilter(): DetailProduct[] {
    return this.products;
  }

  private expensiveFilter(): DetailProduct[] {
    return this.products.filter((productMock) => productMock.price > 2000);
  }

  private cheapFilter(): DetailProduct[] {
    return this.products.filter((productMock) => productMock.price < 2000);
  }

  private priceLowerFilter(): DetailProduct[] {
    return this.products.slice().sort((a, b) => a.price - b.price);
  }

  private priceHigherFilter(): DetailProduct[] {
    return this.products.slice().sort((a, b) => b.price - a.price);
  }
}
