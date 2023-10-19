import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthResponseInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          localStorage.removeItem("currentOIDC");
          alert('Hubo un error al crear el usuario');
          this.auth.loginError()      
        }
        return next.handle(req);
      })
    );
  }
}
