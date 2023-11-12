import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/service/auth.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  url = environment.backendAPI + '/user/admin/users';
  constructor(private http: HttpClient, private auth: AuthService) { }

  getUsers(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.token);
    return this.http.get(this.url, { headers });
  }
  updateUserRole(username: string, role: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.token);
    const body = {
      username: username,
      role: role
    };
    const url = environment.backendAPI + '/user/admin/role';
    return this.http.put(url, body, { headers });
  }
}