import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, filter, map, tap } from "rxjs";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.auth.token
        if(token == ""){
            //Return inmedialy to avoid 401 errors with oauth2 resource servers
            return next.handle(req)
        }
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + token
            }
        })
        return next.handle(req)
    }

}