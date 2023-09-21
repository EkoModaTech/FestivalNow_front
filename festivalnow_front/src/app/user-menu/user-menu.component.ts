import { Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {
  menuItems = [
    { label: 'Perfil', link: '/perfil' },
    { label: 'Configuración', link: '/setting' },
    { label: 'Cerrar sesión', link: '/logout' }
  ];
}
