import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
