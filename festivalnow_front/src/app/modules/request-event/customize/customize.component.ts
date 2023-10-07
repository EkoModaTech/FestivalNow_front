import { Component } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent {

  nuevoEvento: any = {
    // Otras propiedades si las tienes...
    imagenURL: ''
  };

  isURLValid: boolean = true;

  crearEvento(): void {
    this.validateImageURL();

    if (!this.isURLValid) {
      alert('Por favor, corrija los errores en el formulario.');
      return;
    }

    console.log(this.nuevoEvento);
  }

  validateImageURL(): void {
    const urlPattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/;
    this.isURLValid = urlPattern.test(this.nuevoEvento.imagenURL);
  }
}
