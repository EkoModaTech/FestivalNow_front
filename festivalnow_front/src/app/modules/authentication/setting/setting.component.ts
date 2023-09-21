import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { User } from 'src/app/models/user.models'; // Ajusta la ruta según la ubicación de tu modelo
import { EditUserComponent } from '../edit-user/edit-user.component';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})


export class SettingComponent {

  users: User[] = [
    { nombre: 'Usuario 1', rol: 'Rol 1' },
    { nombre: 'Usuario 2', rol: 'Rol 2' },
    { nombre: 'Usuario 3', rol: 'Rol 3' },
    { nombre: 'Usuario 1', rol: 'Rol 1' },
    { nombre: 'Usuario 2', rol: 'Rol 2' },
    { nombre: 'Usuario 3', rol: 'Rol 3' },
    { nombre: 'Usuario 1', rol: 'Rol 1' },
    { nombre: 'Usuario 2', rol: 'Rol 2' },
    { nombre: 'Usuario 3', rol: 'Rol 3' },
    { nombre: 'Usuario 1', rol: 'Rol 1' },
    { nombre: 'Usuario 2', rol: 'Rol 2' },
    { nombre: 'Usuario 3', rol: 'Rol 3' }
  ];  
  usuarioEditando: User | null = null;
  constructor(private dialog: MatDialog) {}

  editarUsuario(user: User) {
    // Abre el diálogo de edición
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    dialogConfig.width = '40%';
    // Personaliza la posición del diálogo
    dialogConfig.position = {
      left: '800px',
      top: '-500px',
    };
  
    // Personaliza el estilo del diálogo
    dialogConfig.panelClass = 'custom-dialog-container';
  
    // Pasa el nombre de usuario y el rol al cuadro de diálogo
    dialogConfig.data = { nombreUsuario: user.nombre, rolUsuario: user.rol };
  
    const dialogRef = this.dialog.open(EditUserComponent, dialogConfig);

    // Escucha el cierre del diálogo y actualiza el usuario si se realizaron cambios
    dialogRef.afterClosed().subscribe((result: User | undefined) => {
      if (result) {
        // Encuentra el índice del usuario editado en la lista
        const index = this.users.findIndex(u => u === user);

        if (index !== -1) {
          // Reemplaza el usuario original con el usuario editado
          this.users[index] = result;
        }
      }

      // Limpia la variable usuarioEditando
      this.usuarioEditando = null;
    });
  }
  
  eliminarUsuario(user: User) {
    // Aquí puedes eliminar el usuario de la lista
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }  
}