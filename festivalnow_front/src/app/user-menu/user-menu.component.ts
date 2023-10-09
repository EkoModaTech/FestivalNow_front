import { Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {
  menuItems = [
    { label: 'Mis Boletos', link: '/clientEvent' },
    { label: 'Mis eventos', link: '/hostEvent' },
    { label: 'Iniciar sesion', link: '/login' }
  ];
}
