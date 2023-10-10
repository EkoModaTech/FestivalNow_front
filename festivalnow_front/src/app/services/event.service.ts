import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEventos(): Observable<any[]> {
    return this.http.get<any[]>(environment.backendAPI+"/event/event/list");
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.postEventApiUrl, event)
  }

  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(this.putEventApiUrl +event.idEvent, event)
  }
}