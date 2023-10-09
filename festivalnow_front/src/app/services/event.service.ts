import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from 'src/app/models/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // TODO: Descomentar para probar junto a autenticación (OAuth)
  // private apiUrl = 'https://qa.10.43.101.226.nip.io/event/event/list';
  // private postEventApiUrl = 'https://qa.10.43.101.226.nip.io/event/create';
  // private putEventApiUrl = 'https://qa.10.43.101.226.nip.io/event/update/'

  private apiUrl = 'http://10.43.100.19:24444/event/list';
  private postEventApiUrl = 'http://10.43.100.19:24444/event/create';
  private putEventApiUrl = 'http://10.43.100.19:24444/event/update/'

  constructor(private http: HttpClient) { }

  getEventos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.postEventApiUrl, event)
  }

  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(this.putEventApiUrl + event.idEvent, event)
  }
}