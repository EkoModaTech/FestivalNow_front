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
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from 'src/app/home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmarCompraDialogComponent } from './specific-event/Dialog/confirmar-compra-dialog/confirmar-compra-dialog.component';
import { SuccessDialogComponent } from './specific-event/Dialog/confirmar-publicidad-dialog/confirmar-publicidad-dialog.component';
@NgModule({
  declarations: [
    GeneralEventComponent,
    SpecificEventComponent,
    AdminEventComponent,
    ClientEventComponent,
    HostEventComponent,
    ConfirmarCompraDialogComponent,
    SuccessDialogComponent
  ],
  imports: [
    HomeModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es', }
  ]

})
export class EventModule { }
