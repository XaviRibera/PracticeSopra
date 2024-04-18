import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductFormEntryComponent } from './similar-product-form-entry.component';

describe('SimilarProductFormEntryComponent', () => {
  let component: SimilarProductFormEntryComponent;
  let fixture: ComponentFixture<SimilarProductFormEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarProductFormEntryComponent]
    });
    fixture = TestBed.createComponent(SimilarProductFormEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
