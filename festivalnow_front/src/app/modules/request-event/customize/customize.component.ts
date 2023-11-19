import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from 'src/app/models/event.interface';
import { EventService } from 'src/app/services/event.service';
import { ThemePalette } from '@angular/material/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit{
  colorControl = new FormControl('warn' as ThemePalette);
  urlControl = new FormControl('', [Validators.required, Validators.pattern(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/)]);
  error : boolean = false;
  error_message : string = 'Error al crear el evento';

  ngOnInit(): void {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      this.nuevoEvento.createdBy = usuario.username;
    }
    this.urlControl.setValue(this.nuevoEvento.url);
    this.urlControl.valueChanges.subscribe(value => this.nuevoEvento.url = value);
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

    if (this.nuevoEvento.name === '' || this.nuevoEvento.date === '' || this.nuevoEvento.ability === 0 || this.nuevoEvento.description === '' || this.nuevoEvento.state === '' || this.nuevoEvento.type === '' || this.nuevoEvento.city === null || this.nuevoEvento.url === '' || this.nuevoEvento.direction === '' || this.nuevoEvento.visibility === null || this.nuevoEvento.createdBy === '') {
      alert('Por favor, llene todos los campos.');
      return;
    }
    this.eventService.postEvento(this.nuevoEvento).subscribe({
      next: (data: any) => {
        alert('Evento creado con éxito!');
        this.resetForm();
      },
      error: (error: any) => {
        this.error = true;
        alert('Hubo un error al crear el evento. Detalles: ' + error.message);
      }
    });
  }

  validateImageURL(): void {
    console.log('validando');
    this.isURLValid = this.urlControl.valid;
    console.log('Is URL valid? ', this.isURLValid);
  }

  getErrorMessage() {
    if (this.urlControl.hasError('required')) {
      return 'Debes ingresar una URL valida';
    }

    return this.urlControl.hasError('pattern') ? 'URL de imagen no válida' : '';
  }
 
  resetForm(): void {
    this.nuevoEvento = {
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
    this.Validator = '';
    this.isURLValid = true;
    this.urlControl.reset();
  }
  
}