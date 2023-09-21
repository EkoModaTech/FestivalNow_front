import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketBuyComponent } from './ticket-buy/ticket-buy.component';
import { PseComponent } from './pse/pse.component';



@NgModule({
  declarations: [
    TicketBuyComponent,
    PseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BuyModule { }
