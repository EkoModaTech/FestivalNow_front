import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralEventComponent } from './general-event/general-event.component';
import { SpecificEventComponent } from './specific-event/specific-event.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { ClientEventComponent } from './client-event/client-event.component';
import { HostEventComponent } from './host-event/host-event.component';
import { MatButtonModule }  from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EventService } from 'src/app/services/event.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    GeneralEventComponent,
    SpecificEventComponent,
    AdminEventComponent,
    ClientEventComponent,
    HostEventComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es', }
  ]

})
export class EventModule { }
