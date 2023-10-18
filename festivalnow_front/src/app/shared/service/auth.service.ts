import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { RegisterRequest } from 'src/app/models/auth/register.request';
import { environment } from 'src/environments/environment';
import { OIDCEntity } from '../model/oidc.entity';
import jwtDecode from 'jwt-decode';

interface MyToken {
  exp: number;
  iat: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  typ: string;
  azp: string;
  realm_access: Object;
  resource_access: Object;
  scope: string;
  sid: string;
  email_verified: boolean;
  preferred_username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationResponseSubject: BehaviorSubject<OIDCEntity>
  public isLoggedIn: boolean = false;

  public get isLogged() {
    return this.authenticationResponseSubject;
  }

  constructor(private http: HttpClient) {
    let oidc = localStorage.getItem('currentOIDC')
    if (oidc === null) {
      this.authenticationResponseSubject = new BehaviorSubject<OIDCEntity>(new OIDCEntity)
    } else {
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

        const jwtToken = oidc.access_token;
        const decodedToken = jwtDecode<MyToken>(jwtToken);
        const usuario = {
          username: decodedToken.preferred_username,
          email: decodedToken.email,
          email_verified: decodedToken.email_verified
        }

        localStorage.setItem('usuario', JSON.stringify(usuario));

        this.authenticationResponseSubject.next(oidc);
        this.isLoggedIn = true;
        return oidc;
      }));
  }

  signup(user: RegisterRequest) {
    return this.http.post(`${environment.backendAPI}/user/`, user, { responseType: 'text' })
  }

  logout() {
    const refreshToken = this.authenticationResponseSubject.value.refresh_token;
  
    return this.http.post(`${environment.backendAPI}/user/auth/logout`, { refreshToken: refreshToken }).pipe(
      map(v => {
        this.removeToken();
        this.authenticationResponseSubject.next(new OIDCEntity);
        this.isLoggedIn = false;
      })
    );
  }
  

  loginError() {
    this.authenticationResponseSubject.next(new OIDCEntity);
    this.isLoggedIn = false;
  }

  private removeToken() {
    localStorage.removeItem("currentOIDC")
  }
}
