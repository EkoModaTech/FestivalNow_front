import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent {

  constructor(private http: HttpClient) {}

  nuevoEvento: any = {
    name: '',
    date: '',
    ability: 0,
    description: '',
    type: '',
    city: {
      idCity: 1
    },
    logistic: {
      idLogistic: 1
    },
    imagenURL: ''
  };

  isURLValid: boolean = true;

  crearEvento(): void {
    this.validateImageURL();

    if (!this.isURLValid) {
      alert('Por favor, corrija los errores en el formulario.');
      return;
    }

    this.http.post(`${environment.backendAPI}/event/event/list`, this.nuevoEvento).subscribe(response => {
      console.log(response);
      alert('Evento creado con éxito!');
    }, error => {
      console.error(error);
      alert('Hubo un error al crear el evento.');
    });
  }

  validateImageURL(): void {
    const urlPattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/;
    this.isURLValid = urlPattern.test(this.nuevoEvento.imagenURL);
  }
}
