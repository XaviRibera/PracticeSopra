import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { ProductModule } from './modules/product/product.module';
import { AboutModule } from './modules/about/about.module';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductModule, AboutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
