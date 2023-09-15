import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './home/not-found/not-found.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RecoverPasswordComponent } from './modules/authentication/recover-password/recover-password.component';
import { RegisterComponent } from './modules/authentication/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'Home',pathMatch:'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'not-found', component: NotFoundComponent },
  {path: 'login',component: LoginComponent},
  {path: 'recover',component: RecoverPasswordComponent},
  {path: 'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
