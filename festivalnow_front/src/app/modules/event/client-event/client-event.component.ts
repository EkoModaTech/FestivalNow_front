import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.interface';

@Component({
  selector: 'app-client-event',
  styleUrls: ['./client-event.component.css'],
  template: 
  `
  <div class="container">
    <h2>Tus Eventos</h2>
    <table class="mat-elevation-z8">
      <thead>
        <tr>
          <th>Fecha y Hora</th>
          <th>Nombre del Evento</th>
          <th>Capacidad</th>
          <th>Dirección</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let evento of eventos">
          <td>{{evento.date}}</td>
          <td>{{evento.name}}</td>
          <td>{{evento.ability}}</td>
          <td>{{evento.city}}</td>
          <td>
            <!-- Agrega aquí tus botones de acciones (Ver Detalle, Editar, Cambiar Estado) -->
            <button (click)="verDetalleBoleto({evento})">Ver Boleto</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
`,
})
export class ClientEventComponent {

  constructor(private eventService: EventService) { }

  eventos: Event[] = [];

  ngOnInit(): void {
    this.eventService.getEventos().subscribe(eventos => {
      this.eventos = eventos;

       // Debug log
      console.log(eventos);
    });
  }

  verDetalleBoleto(evento: any) {
    // Aquí debes agregar la lógica para llevar al usuario a la vista de boletos del evento en específico.
    // Esto podría incluir la navegación a una nueva ruta.
  }
}
