import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './pages/cart/cart.component';
import { ListComponent } from './pages/list/list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ProductComponent } from './pages/product/product.component';



@NgModule({
  declarations: [
    CartComponent,
    ListComponent,
    DashboardComponent,
    SalesComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductStoreModule { }