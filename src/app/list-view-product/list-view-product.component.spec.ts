import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewProductComponent } from './list-view-product.component';

describe('ListViewProductComponent', () => {
  let component: ListViewProductComponent;
  let fixture: ComponentFixture<ListViewProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListViewProductComponent]
    });
    fixture = TestBed.createComponent(ListViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
