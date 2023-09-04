import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // hacemos la carga perezosa de este modulo de productos
    path: '',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
