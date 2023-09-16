import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ProfileComponent } from './profile/profile.component';
import { TicketComponent } from './ticket/ticket.component';
import { SettingComponent } from './setting/setting.component';
import { ProviderComponent } from './provider/provider.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    ProfileComponent,
    TicketComponent,
    SettingComponent,
    ProviderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
