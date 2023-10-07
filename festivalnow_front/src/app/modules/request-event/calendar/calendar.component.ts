import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {

  //selectedDate: Date = new Date();  // Aquí está la inicialización

  disabledDates = [
    new Date('2023-10-05'),
    new Date('2023-10-07'),
    // ... añade aquí otras fechas que quieras deshabilitar
  ];

  addEvent(event: MatDatepickerInputEvent<Date>) {
    //if (event.value) {
      //this.selectedDate = event.value;
    //}
  }

  dateFilter = (date: Date | null): boolean => {
    if (!date) {
      return false; // o true, dependiendo de si quieres permitir fechas nulas o no
    }

    const isDisabled = this.disabledDates.some(d =>
      d.getFullYear() === date.getFullYear() &&
      d.getMonth() === date.getMonth() &&
      d.getDate() === date.getDate()
    );

    return !isDisabled;
  };

}
