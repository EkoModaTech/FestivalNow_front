import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizeComponent } from './customize/customize.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule }  from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthenticationModule } from '../authentication/authentication.module';
@NgModule({
  declarations: [
    CustomizeComponent,
    CalendarComponent,
    EditComponent,
  ],
  imports: [
    AuthenticationModule,
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    CalendarComponent
  ],
})
export class RequestEventModule { }