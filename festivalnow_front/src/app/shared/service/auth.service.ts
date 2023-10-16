import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { RegisterRequest } from 'src/app/models/auth/register.request';
import { environment } from 'src/environments/environment';
import { OIDCEntity } from '../model/oidc.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationResponseSubject: BehaviorSubject<OIDCEntity>
  public isLoggedIn: boolean = false;

  public get isLogged(){
    return this.authenticationResponseSubject
  }

  
  constructor(private http: HttpClient) {
    let oidc = localStorage.getItem('currentOIDC')
    if(oidc === null){
      this.authenticationResponseSubject = new BehaviorSubject<OIDCEntity>(new OIDCEntity)
    }else{
      this.authenticationResponseSubject = new BehaviorSubject<OIDCEntity>(JSON.parse(oidc))
    }
  }

  public get token(): string {
    return this.authenticationResponseSubject.value.access_token
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.backendAPI}/user/auth/login`, {
      "username": username,
      "password": password
    })
      .pipe(map((oidc: OIDCEntity) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentOIDC', JSON.stringify(oidc));
        this.authenticationResponseSubject.next(oidc);
        this.isLoggedIn = true;
        return oidc;
      }));
  }

  signup(user: RegisterRequest) {
    return this.http.post(`${environment.backendAPI}/user/`, user, {responseType: 'text'})
  }

  logout() {
    return this.http.post(`${environment.backendAPI}/user/auth/logout`, {}).pipe(
      map(v => {
        this.removeToken()
        this.authenticationResponseSubject.next(new OIDCEntity);
        this.isLoggedIn = false;
      })
    )
  }

  loginError(){
    this.authenticationResponseSubject.next(new OIDCEntity);
    this.isLoggedIn = false;
  }

  private removeToken(){
    localStorage.removeItem("currentOIDC")
  }
}
