import { Component, Input, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Event } from 'src/app/models/event.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit{

  @Input() nuevoEvento!: Event;
  selectedDate!: Date;
  disabledDates = [
    new Date(Date.UTC(2023, 9, 5)),  // Octubre 5
    new Date(Date.UTC(2023, 9, 7)),  // Octubre 7
  ];
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDisabledDates();
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      this.nuevoEvento.date = event.value.toISOString(); // Assign the value to nuevoEvento.date
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

  fetchDisabledDates(): void {
    this.http.get<any[]>( `${environment.backendAPI}/event/event/list`).subscribe(events => {
      this.disabledDates = events.map(event => new Date(event.date));
      this.loading = false;
    }, error => {
      console.error("Error fetching events:", error);
      this.loading = false;
    });
  }
}