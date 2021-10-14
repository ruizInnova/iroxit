import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)

  },
  {
    path: 'store',
    loadChildren: () => import('./product-store/product-store.module').then(module => module.ProductStoreModule)
  },
  {
    path: '404',
    component: ErrorPageComponent

  },
  {
    path: '**',
    redirectTo: '404'
  }
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
