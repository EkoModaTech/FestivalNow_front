import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AboutUsModule } from './modules/about-us/about-us.module';
import { BuyModule } from './modules/buy/buy.module';
import { EventModule } from './modules/event/event.module';
import { ContactModule } from './modules/contact/contact.module';
import { RequestEventModule } from './modules/request-event/request-event.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { PowerBIComponent } from './power-bi/power-bi.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { LicenciasComponent } from './licencias/licencias.component';
import { AuthResponseInterceptor } from './shared/interceptor/auth-response.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserMenuComponent,
    FooterComponent,
    PowerBIComponent,
    SidebarComponent,
    ProveedoresComponent,
    LicenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AuthenticationModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    BuyModule,
    AboutUsModule,
    EventModule,
    RequestEventModule,
    ContactModule,
    HomeModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthResponseInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }