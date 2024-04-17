import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/detail/product.component';
import { CartComponent } from './pages/cart/cart.component';
//import { NewProductFormComponent } from './pages/new-product-form/new-product-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'insert-product', pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  //{ path: 'insert-product', component: NewProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
