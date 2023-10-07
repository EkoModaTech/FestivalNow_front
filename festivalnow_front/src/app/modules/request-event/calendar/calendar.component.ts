import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses, MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {

  selectedDate!: Date;
  disabledDates = [
    new Date(Date.UTC(2023, 9, 5)),  // Octubre 5
    new Date(Date.UTC(2023, 9, 7)),  // Octubre 7
  ];


  addEvent(event: MatDatepickerInputEvent<Date>) {
    if (event.value)
    {
      this.selectedDate = event.value;
    }
  }

  dateFilter = (date: Date | null): boolean => {
    if (!date) {
      return false;
    }

    const isDisabled = this.disabledDates.some(d =>
      d.getUTCFullYear() === date.getUTCFullYear() &&
      d.getUTCMonth() === date.getUTCMonth() &&
      d.getUTCDate() === date.getUTCDate()
    );

    return !isDisabled;
  };

  dateClass = (date: Date): MatCalendarCellCssClasses => {
    const isDisabled = this.disabledDates.some(d =>
      d.getUTCFullYear() === date.getUTCFullYear() &&
      d.getUTCMonth() === date.getUTCMonth() &&
      d.getUTCDate() === date.getUTCDate()
    );

    return isDisabled ? 'disabled-date' : '';
  };
}
