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
      // Obtén el rol del usuario desde localStorage
      const usuarioString = localStorage.getItem('usuario');
      if (usuarioString !== null) {
        const usuario = JSON.parse(usuarioString);
        const userRoles: string[] = usuario.roles; // Especifica el tipo de datos de userRoles

        // Define los roles necesarios para cada ruta
        const requiredRoles: string[] = route.data['roles'] as string[]; // Especifica el tipo de datos de requiredRoles

        // Verifica si el usuario tiene al menos uno de los roles necesarios para acceder a la ruta
        if (userRoles.some((role: string) => requiredRoles.includes(role))) { // Especifica el tipo de datos de role
          return true; // Usuario autenticado y autorizado, permite el acceso.
        }
      }
      
      // Usuario no tiene el rol necesario o no se pudo obtener el usuario, muestra un mensaje o redirige a una página de acceso no autorizado.
      alert('No tienes permiso para acceder a esta página.');
      return false;
    } else {
      // Usuario no autenticado, muestra una alerta en lugar de redirigir.
      alert('Debes iniciar sesión para acceder a esta página.');
      // Evita que la navegación continúe.
      return false;
    }
  }
}
