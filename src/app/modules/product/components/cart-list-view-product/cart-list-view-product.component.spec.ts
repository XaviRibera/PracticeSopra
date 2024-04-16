import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListViewProductComponent } from './cart-list-view-product.component';

describe('CartListViewProductComponent', () => {
  let component: CartListViewProductComponent;
  let fixture: ComponentFixture<CartListViewProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartListViewProductComponent]
    });
    fixture = TestBed.createComponent(CartListViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
