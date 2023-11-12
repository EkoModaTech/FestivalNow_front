import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>, private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: { nombreUsuario: string, rolUsuario: string }
  ) {}

  ngOnInit() {
    // Puedes acceder a los datos aquí
    const nombreUsuario = this.data.nombreUsuario;
    const rolUsuario = this.data.rolUsuario;

    // Haz lo que necesites con el nombre de usuario y el rol
  }
  selectedOption: string | null = null;
  options: string[] = ['ADMIN', 'HOST', 'EMPLOYEE'];

  toggleDropdown(option: string) {
    this.selectedOption = option;
  }
  cerrarDialog(): void {
    // Cierra el diálogo y pasa cualquier dato necesario de vuelta (si es necesario)
    this.dialogRef.close();
  }
  confirmarCambios() {
    if (this.selectedOption) {
      this.userService.updateUserRole(this.data.nombreUsuario, this.selectedOption).subscribe(response => {
        console.log(response);
        this.cerrarDialog();
      }, error => {
        console.error(error);
      });
    }
  }

}
