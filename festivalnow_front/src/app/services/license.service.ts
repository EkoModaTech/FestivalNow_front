import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Licencia } from '../models/licencia.interface';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {
  
  private postLicenseApiUrl = environment.backendAPI + "/license";

  constructor(private http: HttpClient) { }

  
  getLicenciasPorEvento(eventId: string): Observable<Licencia[]> {
    console.log('ID: ', eventId);
    const body = { "event_id": eventId };
    const url = `${environment.backendAPI}/external/license`;
    return this.http.post<Licencia[]>(url, body);
  }

}