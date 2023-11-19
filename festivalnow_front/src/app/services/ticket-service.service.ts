import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  constructor(private http: HttpClient) { }

  postTicket(code: string, price: number, idEvent: number) {
    const body = {
      code: code,
      price: price,
      idEvent: idEvent
    };
    return this.http.post(environment.backendAPI + '/ticket/ticket/create', body);
  }

  getTickets() {
    return this.http.get(environment.backendAPI + '/ticket/ticket/list');
  }
}