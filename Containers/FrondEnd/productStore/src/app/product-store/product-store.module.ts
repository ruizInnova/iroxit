import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
// Modules
import { ProductStoreRoutingModule } from './product-store-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
// Components
import { CartComponent } from './pages/cart/cart.component';
import { ListComponent } from './pages/list/list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ProductComponent } from './pages/product/product.component';
import { GraficComponent } from './pages/grafic/grafic.component';



@NgModule({
  declarations: [
    CartComponent,
    ListComponent,
    DashboardComponent,
    SalesComponent,
    ProductComponent,
    GraficComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ProductStoreRoutingModule,
    ComponentsModule
  ]
})
export class ProductStoreModule { }
