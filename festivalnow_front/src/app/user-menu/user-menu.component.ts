import { Component } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {
  menuItems: any[] = [];

  constructor(private auth: AuthService) {
    this.updateMenuItems();
  }

  updateMenuItems() {
    if (this.auth.isLoggedIn) {
      // El usuario ha iniciado sesión, muestra "Ver perfil"
      this.menuItems = [
        { label: 'Ver perfil', link: '/setting' }
      ];
    } else {
      this.menuItems = [
        { label: 'Iniciar sesion', link: '/login' }
      ];
    }
  }
}
