import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewProductComponent } from './list-view-product.component';
import { DetailProduct } from '../../interfaces/models/DetailProduct';

fdescribe('ListViewProductComponent', () => {
  let component: ListViewProductComponent;
  let fixture: ComponentFixture<ListViewProductComponent>;
  let productMock: DetailProduct = {
    id: 'p0',
    product: 'productMock',
    price: 1,
    currency: '€',
    rating: 0,
    description: 'descriptionMock',
    favorite: false,
    similarProducts: null,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListViewProductComponent],
    });
    fixture = TestBed.createComponent(ListViewProductComponent);
    component = fixture.componentInstance;
    component.product = productMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the produc selected', () => {
    let expectedProduct: DetailProduct = {
      id: 'p0',
      product: 'productMock',
      price: 1,
      currency: '€',
      rating: 0,
      description: 'descriptionMock',
      favorite: false,
      similarProducts: null,
    };
    component.showProduct.subscribe((productToShow: DetailProduct) =>
      expect(productToShow).toEqual(expectedProduct)
    );
    component.onShowProduct();
  });

  it('should set select false by default', () => {
    expect(component.isSelected).toBeFalsy();
  })

  it('should detect it is selected', () => {
    component.isSelected = true;
    expect(component.isSelected).toBeTruthy();
  })
});
