import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizeComponent } from './customize/customize.component';
import { WeddingComponent } from './wedding/wedding.component';
import { FestivalComponent } from './festival/festival.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { ConcertComponent } from './concert/concert.component';
import { PackageComponent } from './package/package.component';



@NgModule({
  declarations: [
    CustomizeComponent,
    WeddingComponent,
    FestivalComponent,
    BirthdayComponent,
    ConcertComponent,
    PackageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RequestEventModule { }
