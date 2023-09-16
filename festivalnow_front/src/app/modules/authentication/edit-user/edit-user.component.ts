import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nombreUsuario: string, rolUsuario: string }
  ) {}

  ngOnInit() {
    // Puedes acceder a los datos aquí
    const nombreUsuario = this.data.nombreUsuario;
    const rolUsuario = this.data.rolUsuario;

    // Haz lo que necesites con el nombre de usuario y el rol
  }
  selectedOption: string | null = null;
  options: string[] = ['Administrador', 'Anfitrion', 'Cliente'];

  toggleDropdown(option: string) {
    this.selectedOption = option;
  }
  cerrarDialog(): void {
    // Cierra el diálogo y pasa cualquier dato necesario de vuelta (si es necesario)
    this.dialogRef.close();
  }

}
