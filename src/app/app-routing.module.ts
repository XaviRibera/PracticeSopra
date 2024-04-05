import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { ProductComponent } from './modules/product/product.component';
import { ProductModule } from './modules/product/product.module';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    //component: ProductComponent
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),

  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  { path: '**', redirectTo: 'page not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ProductModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
