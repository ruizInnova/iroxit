import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { AuthRoutingModule } from './auth-routing.module';
// Components
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
