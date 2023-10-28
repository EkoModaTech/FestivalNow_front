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
@NgModule({
  declarations: [
    CustomizeComponent,
    CalendarComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule 
  ],
  exports: [
    CalendarComponent
  ],
})
export class RequestEventModule { }