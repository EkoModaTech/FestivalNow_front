import { Component } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent {
  nuevoEvento: any = {}; // Objeto para almacenar los datos del nuevo evento

  crearEvento() {
    // Aquí puedes agregar la lógica para enviar los datos del evento al servidor
    // Por ahora, solo mostraremos los datos en la consola
    console.log(this.nuevoEvento);
  }
}
