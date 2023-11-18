import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { RegisterRequest } from 'src/app/models/auth/register.request';
import { environment } from 'src/environments/environment';
import { OIDCEntity } from '../model/oidc.entity';
import jwtDecode from 'jwt-decode';

interface MyToken {
  email_verified: boolean;
  preferred_username: string;
  email: string;
  realm_access: Record<string, any>;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationResponseSubject: BehaviorSubject<OIDCEntity>
  public isLoggedIn: boolean = false;
  public userRoles: string[] = [];

  public get isLogged() {
    return this.authenticationResponseSubject;
  }

  constructor(private http: HttpClient) {
    let oidc = localStorage.getItem('currentOIDC');
    if (oidc === null) {
      this.authenticationResponseSubject = new BehaviorSubject<OIDCEntity>(new OIDCEntity);
    } else {
      this.authenticationResponseSubject = new BehaviorSubject<OIDCEntity>(JSON.parse(oidc));
      this.setUserRoles(this.authenticationResponseSubject.value.access_token);
    }
  }

  public get token(): string {
    return this.authenticationResponseSubject.value.access_token;
  }

  // Decodificar el token JWT y obtener los roles desde realm_access
  public setUserRoles(token: string): void {
    const decodedToken = jwtDecode<MyToken>(token);
    const roles = decodedToken.realm_access['roles'];
    if (roles) {
      this.userRoles = roles;
    }
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
        //console.log(jwtToken);
        this.setUserRoles(jwtToken);

        const decodedToken = jwtDecode<MyToken>(jwtToken);
        const usuario = {
          username: decodedToken.preferred_username,
          email: decodedToken.email,
          email_verified: decodedToken.email_verified,
          roles: decodedToken.realm_access['roles']
        }

        localStorage.setItem('usuario', JSON.stringify(usuario));

        this.authenticationResponseSubject.next(oidc);
        this.isLoggedIn = true;
        return oidc;
      }));
  }

  signup(user: RegisterRequest) {
    return this.http.post(`${environment.backendAPI}/user/`, user, { responseType: 'text' });
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
  public getUserRoles(): string[] {
    return this.userRoles;
  }

  loginError() {
    this.authenticationResponseSubject.next(new OIDCEntity);
    this.isLoggedIn = false;
    this.removeToken()
  }

  private removeToken() {
    localStorage.removeItem("currentOIDC");
    localStorage.removeItem("usuario");
  }
}
