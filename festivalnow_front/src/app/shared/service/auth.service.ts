import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { User } from 'src/app/models/user.models';
import { AuthenticationResponse } from 'src/app/models/auth/authentication.response';
import { RegisterRequest } from 'src/app/models/auth/register.request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationResponseSubject: BehaviorSubject<AuthenticationResponse>

  public get isLogged(){
    return this.authenticationResponseSubject
  }

  constructor(private http: HttpClient) {
    let user = localStorage.getItem('currentUser')
    if(user === null){
      this.authenticationResponseSubject = new BehaviorSubject<AuthenticationResponse>(new AuthenticationResponse)
    }else{
      this.authenticationResponseSubject = new BehaviorSubject<AuthenticationResponse>(JSON.parse(user))
    }
  }
/*
  public get currentUserValue(): User {
    let user = new User

    user.nombre = this.authenticationResponseSubject.value.nombre
    user.rol = this.authenticationResponseSubject.value.rol
    
    return user
  }

  public get isLoggedIn(): boolean {
    //let authToken = localStorage.getItem('currentUser');
    return this.currentUserValue.id !== 0
  }
*/
  public get token(): string {
    return this.authenticationResponseSubject.value.token
  }

  t(){}
  login(username: string, password: string) {
    return this.http.post<any>(`${environment.backendAPI}/auth/authenticate`, {
      "username": username,
      "password": password
    })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.authenticationResponseSubject.next(user);
        return user;
      }));
  }

  signup(user: RegisterRequest) {
    return this.http.post<any>(`${environment.backendAPI}/auth/register`, user).pipe(map(u => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(u));
      this.authenticationResponseSubject.next(u);
      return u;
    }));
  }

  logout() {
    return this.http.post(`${environment.backendAPI}/auth/logout`, {}).pipe(
      map(v => {
        this.removeToken()
        this.authenticationResponseSubject.next(new AuthenticationResponse);
      })
    )
  }

  loginError(){
    this.authenticationResponseSubject.next(new AuthenticationResponse)
  }

  private removeToken(){
    localStorage.removeItem("currentUser")
  }
}
