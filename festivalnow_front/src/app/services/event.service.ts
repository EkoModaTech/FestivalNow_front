import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../models/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private postEventApiUrl = environment.backendAPI + "/event/event/create";
  private putEventApiUrl = environment.backendAPI + "/event/event/update/";

  constructor(private http: HttpClient) { }

  getEventos(): Observable<any[]> {
    return this.http.get<any[]>(environment.backendAPI + "/event/event/list/public");
  }

  createEvento(event: Event): Observable<Event> {
    return this.http.post<Event>(this.postEventApiUrl, event);
  }

  updateEvento(event: Event): Observable<Event> {
    return this.http.put<Event>(this.putEventApiUrl + event.idEvent, event);
  }
}
