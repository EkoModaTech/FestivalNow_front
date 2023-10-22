import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './home/not-found/not-found.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RecoverPasswordComponent } from './modules/authentication/recover-password/recover-password.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { SettingComponent } from './modules/authentication/setting/setting.component';
import { EditUserComponent } from './modules/authentication/edit-user/edit-user.component';
import { PseComponent } from './modules/buy/pse/pse.component';
import { GeneralEventComponent } from './modules/event/general-event/general-event.component';
import { SpecificEventComponent } from './modules/event/specific-event/specific-event.component';
import { AdminEventComponent } from './modules/event/admin-event/admin-event.component';
import { ClientEventComponent } from './modules/event/client-event/client-event.component';
import { HostEventComponent } from './modules/event/host-event/host-event.component';
import { CustomizeComponent } from './modules/request-event/customize/customize.component';
import { CalendarComponent } from './modules/request-event/calendar/calendar.component';
import { PresentationComponent } from './modules/about-us/presentation/presentation.component';
import { ContactUsComponent } from './modules/contact/contact-us/contact-us.component';
import { PowerBIComponent } from './power-bi/power-bi.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { ProfileComponent } from './modules/authentication/profile/profile.component';
import { EditComponent } from './modules/request-event/edit/edit.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { LicenciasComponent } from './licencias/licencias.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'PSE', component: PseComponent, canActivate:[AuthGuard], data: { roles: ['CLIENT'] }},
  {path: 'login',component: LoginComponent},
  {path: 'recover',component: RecoverPasswordComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'setting', component:SettingComponent, canActivate:[AuthGuard],  data: { roles: ['ADMIN'] }},
  {path: 'edit',component:EditUserComponent},
  {path: 'profile',component:ProfileComponent, canActivate:[AuthGuard], data: { roles: ['CLIENT', 'ADMIN'] }},
  {path: 'general',component:GeneralEventComponent},
  {path: 'event/:id',component:SpecificEventComponent},
  {path: 'adminEvent',component:AdminEventComponent, canActivate:[AuthGuard], data: { roles: ['CLIENT'] }},
  {path: 'clientEvent',component:ClientEventComponent, canActivate:[AuthGuard], data: { roles: ['CLIENT'] }},
  {path: 'hostEvent',component:HostEventComponent,canActivate:[AuthGuard], data: { roles: ['CLIENT'] }},
  {path: 'customize',component:CustomizeComponent, canActivate:[AuthGuard], data: { roles: ['CLIENT'] }},
  {path: 'calendar',component:CalendarComponent, canActivate:[AuthGuard], data: { roles: ['CLIENT'] }},
  {path: 'presentation',component:PresentationComponent},
  {path: 'contact',component:ContactUsComponent},
  {path: 'report', component: PowerBIComponent, canActivate:[AuthGuard], data: { roles: ['ADMIN', 'EMPLOYEE'] }},
  {path: 'editEvent',component:EditComponent},
  {path: 'proveedores',component:ProveedoresComponent},
  {path: 'licencias',component:LicenciasComponent},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
