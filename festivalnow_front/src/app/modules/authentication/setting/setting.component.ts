import { Component } from '@angular/core';
import { User } from 'src/app/models/user.models'; // Ajusta la ruta según la ubicación de tu modelo


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})


export class SettingComponent {
  users: User[] = [
    { id: 1, nombre: 'Usuario 1', rol: 'Rol 1' },
    { id: 2, nombre: 'Usuario 2', rol: 'Rol 2' },
    { id: 3, nombre: 'Usuario 3', rol: 'Rol 3' },
    { id: 1, nombre: 'Usuario 1', rol: 'Rol 1' },
    { id: 2, nombre: 'Usuario 2', rol: 'Rol 2' },
    { id: 3, nombre: 'Usuario 3', rol: 'Rol 3' },
    { id: 1, nombre: 'Usuario 1', rol: 'Rol 1' },
    { id: 2, nombre: 'Usuario 2', rol: 'Rol 2' },
    { id: 3, nombre: 'Usuario 3', rol: 'Rol 3' },
    { id: 1, nombre: 'Usuario 1', rol: 'Rol 1' },
    { id: 2, nombre: 'Usuario 2', rol: 'Rol 2' },
    { id: 3, nombre: 'Usuario 3', rol: 'Rol 3' }
  ];
  editarUsuario(user: User) {
    // Aquí puedes navegar a otro componente para editar el usuario
    console.log('Editar usuario:', user);
  }
  
  eliminarUsuario(user: User) {
    // Aquí puedes eliminar el usuario de la lista
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }  
}

