import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private putUserApiUrl = environment.backendAPI + "/user/";

  constructor(private http: HttpClient) { }

  updateUserPassword(newPassword: object): Observable<String> {
    console.log(JSON.stringify({"newPassword": newPassword}))
    return this.http.put<String>(this.putUserApiUrl, newPassword);
  }
}
