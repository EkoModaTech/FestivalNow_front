import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn) {
      return true; // Usuario autenticado, permite el acceso.
    } else {
      // Muestra una alerta en lugar de redirigir.
      alert('Debes iniciar sesión para acceder a esta página.');

      // Evita que la navegación continúe.
      return false;
    }
  }
}
