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

  getLicencias(): Observable<any[]> {
    return this.http.get<any[]>(environment.backendAPI + "/license");
  }
  
  createLicencia(licencia: Licencia): Observable<Event> {
    return this.http.post<Event>(this.postLicenseApiUrl, licencia);
  }
}