import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

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
  });

  constructor(private formBuilder: FormBuilder, private router:Router) {}

  sendNewProductInfo() {
    if (!this.checkValidations) this.checkValidations = true;
    if (this.newProductForm.invalid) return;
    this.formValue = this.newProductForm.value;
    this.showSuccessMessage();
    this.redirectToProduct();
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

  private showSuccessMessage(){
    this.succesSend = true;
  }

  private redirectToProduct() {
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 2000);
  }
}
