import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralEventComponent } from './general-event/general-event.component';
import { SpecificEventComponent } from './specific-event/specific-event.component';



@NgModule({
  declarations: [
    GeneralEventComponent,
    SpecificEventComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventModule { }
