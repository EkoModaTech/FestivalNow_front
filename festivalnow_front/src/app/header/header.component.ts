import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  menuCerrado = true; // Inicialmente, el menú está cerrado
  sidebarCerrado = true; // Inicialmente, la barra lateral está cerrada

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    this.sidebarCerrado = !this.sidebarCerrado; // Invierte el estado de la barra lateral
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  async logout() {
    try {
      await this.authService.logout().toPromise();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  // Agrega un método para abrir el menú cuando el usuario inicia sesión
  abrirMenu() {
    this.menuCerrado = false;
  }
}
