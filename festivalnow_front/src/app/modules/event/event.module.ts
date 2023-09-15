import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralEventComponent } from './general-event/general-event.component';
import { SpecificEventComponent } from './specific-event/specific-event.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { ClientEventComponent } from './client-event/client-event.component';
import { HostEventComponent } from './host-event/host-event.component';



@NgModule({
  declarations: [
    GeneralEventComponent,
    SpecificEventComponent,
    AdminEventComponent,
    ClientEventComponent,
    HostEventComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventModule { }
