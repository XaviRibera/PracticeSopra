import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { DetailProduct } from '../../interfaces/models/DetailProduct';
import { ProductList } from '../../interfaces/models/ProductList';
import { FilterButtonComponent } from '../filter-button/filter-button.component';

fdescribe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let filterListMock: string[] = ['reset','filterMock'];
  let productListMock: ProductList = new ProductList([]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent, FilterButtonComponent],
    });
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    component.filtersList = filterListMock;
    component.productList = productListMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onChangeFilter and emit a product', () => {
    const spy = spyOn(component.changeFilterPipe, 'emit');
    const filterTest = 'reset';
    const expectedFilterTest = 'reset';

    component.onChangeFilter(filterTest);

    expect(spy).toHaveBeenCalledWith(expectedFilterTest);
  });

  it('should call onShowProduct and emit a product', () => {
    const spy = spyOn(component.showProductPipe, 'emit');
    const productTest: DetailProduct = {
      id: '',
      product: '',
      price: 0,
      currency: '',
      rating: 0,
      description: '',
      favorite: undefined,
      similarProducts: null,
    };
    const expectedProductTest = {
      id: '',
      product: '',
      price: 0,
      currency: '',
      rating: 0,
      description: '',
      favorite: undefined,
      similarProducts: null,
    };

    component.onShowProduct(productTest);

    expect(spy).toHaveBeenCalledWith(expectedProductTest);
  })
});
