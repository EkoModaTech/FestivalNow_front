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
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,

>>>>>>> 5b8dd1e376096e7eaa1d910a64da8e5740bc6bc1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    BuyModule,
    AboutUsModule,
    EventModule,
    RequestEventModule,
    ContactModule,
    BrowserAnimationsModule,
    MatIconModule,
    HomeModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
