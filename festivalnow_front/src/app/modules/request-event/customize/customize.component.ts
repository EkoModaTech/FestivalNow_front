import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from 'src/app/models/event.interface';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit{

  ngOnInit(): void {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      this.nuevoEvento.createdBy = usuario.username;
    }
  }

  constructor(private http: HttpClient, private eventService: EventService) {}

  nuevoEvento: Event = {
    idEvent: 0,
    name: '',
    date: '',
    ability: 0,
    description: '',
    state: '',
    type: '',
    city: null,
    url: '',
    direction: '',
    visibility: null,
    createdBy: ''
  };

  Validator: string = '';
  isURLValid: boolean = true;

  crearEvento(): void {
    this.validateImageURL();

    if (!this.isURLValid) {
      alert('Por favor, corrija los errores en el formulario.');
      return;
    }
    if(this.Validator == 'Publico'){
      this.nuevoEvento.visibility = false;
    }
    else if(this.Validator == 'Privado'){
      this.nuevoEvento.visibility = true;
    }
    this.eventService.postEvento(this.nuevoEvento).subscribe(
      response => {
        console.log(response);
        alert('Evento creado con éxito!');
      },
      error => {
        console.error(error);
        alert('Hubo un error al crear el evento. Detalles: ' + error.message);
      }
    );
  }

  validateImageURL(): void {
    const urlPattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/;
    this.isURLValid = this.nuevoEvento.url !== null && urlPattern.test(this.nuevoEvento.url);
  }
}