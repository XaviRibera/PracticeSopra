import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';
import { ProductList } from '../../interfaces/models/ProductList';
import { SimilarProduct } from '../../interfaces/models/SimilarProduct';

import { DetailProduct } from '../../interfaces/models/DetailProduct';
@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.scss'],
})
export class NewProductFormComponent {
  formValue: any;
  checkValidations: boolean = false;
  succesSend: boolean = false;
  currencies: string[] = ['$', '€'];
  defaultCurrency: string = this.currencies[0];
  productsList: ProductList = new ProductList([]);
  similarProducts: SimilarProduct[] = [];

  newProductForm: FormGroup = this.formBuilder.group({
    product: [null, [Validators.required, Validators.minLength(4)]],
    price: [
      null,
      [Validators.required, Validators.min(1), Validators.max(999)],
    ],
    currency: [this.defaultCurrency, Validators.required],
    rating: [null, [Validators.min(0), Validators.max(5)]],
    description: [
      null,
      [
        Validators.required,
        Validators.maxLength(350),
        this.noSpecialCharacterValidator,
      ],
    ],
    favorite: [false],
    similarProducts: [this.similarProducts],
    reviews: [null],
  });
  private productServiceSubscription: Subscription | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) {
    this.chargeDataBase();
  }

  sendNewProductInfo() {
    if (!this.checkValidations) this.checkValidations = true;
    if (this.newProductForm.invalid) return;
    this.formValue = this.newProductForm.value;
    this.submitProduct();
    this.setSuccesPost();
  }

  setProductInSimilar(product: SimilarProduct) {
    let productPosition = this.similarProducts.findIndex((productMock) => {
      return productMock.id === product.id;
    });
    productPosition !== (-1)
      ? this.similarProducts.splice(productPosition, 1)
      : this.similarProducts.push(product)
  }

  transformIntoSimilar(product: DetailProduct):SimilarProduct{
    return new SimilarProduct(product);
  }

  resetForm() {
    this.newProductForm.reset();
    this.checkValidations = false;
  }

  private noSpecialCharacterValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const specialCharactersPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return control.value && specialCharactersPattern.test(control.value)
      ? { noSpecialCharacters: true }
      : null;
  }

  private submitProduct() {
    this.productService.insertProduct(this.formValue);
  }

  private showSuccessMessage() {
    this.succesSend = true;
  }

  private setSuccesPost() {
    this.succesSend = true;
  }

  private chargeDataBase() {
    //this.productService.getProducts();
    this.productServiceSubscription = this.productService.products$.subscribe({
      next: (value) => {
        this.productsList = value;
      },
      error: (error) => console.log('Error: ' + error),
    });
  }

  ngOnDestroy() {
    this.productServiceSubscription?.unsubscribe();
  }
}
