import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AuthenticationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
