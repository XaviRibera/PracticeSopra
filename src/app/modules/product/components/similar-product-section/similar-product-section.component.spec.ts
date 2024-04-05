import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductSectionComponent } from './similar-product-section.component';

describe('SimilarProductSectionComponent', () => {
  let component: SimilarProductSectionComponent;
  let fixture: ComponentFixture<SimilarProductSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarProductSectionComponent]
    });
    fixture = TestBed.createComponent(SimilarProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
