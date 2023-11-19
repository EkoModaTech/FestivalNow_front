import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ProfileComponent } from './profile/profile.component';
import { TicketComponent } from './ticket/ticket.component';
import { SettingComponent } from './setting/setting.component';
import { ProviderComponent } from './provider/provider.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ErrorBannerComponent} from '../error-banner/error-banner.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    ProfileComponent,
    TicketComponent,
    SettingComponent,
    ProviderComponent,
    EditUserComponent,
    ErrorBannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [
    ErrorBannerComponent
  ],
})
export class AuthenticationModule { }
