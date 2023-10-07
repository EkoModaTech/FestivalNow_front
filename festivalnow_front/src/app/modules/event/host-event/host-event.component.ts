import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.interface';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-host-event',
  styleUrls: ['./host-event.component.css'],
  template: 
  `
  <div class="container">
    <h2>Eventos del Anfitrión</h2>
    <table class="mat-elevation-z8">
      <thead>
        <tr>
          <th>Fecha y Hora</th>
          <th>Nombre del Evento</th>
          <th>Capacidad</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let evento of eventos">
          <td>{{evento.date}}</td>
          <td>{{evento.name}}</td>
          <td>{{evento.ability}}</td>
          <td>Activo</td>
          <td>
            <!-- Agrega aquí tus botones de acciones (Ver Detalle, Editar, Cambiar Estado) -->
            <button (click)="verDetalle({evento})">Ver Detalle</button>
            <button (click)="editarEvento({evento})">Editar</button>
            <button (click)="promocionarEvento({evento})">Promocionar</button>
            <button (click)="cambiarEstado({evento})">Cambiar Estado</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
`,
})
export class HostEventComponent {

  constructor(private eventService: EventService, private router: Router) { }

  eventos: Event[] = [];

  ngOnInit(): void {
    this.eventService.getEventos().subscribe(eventos => {
      this.eventos = eventos;
      console.log(eventos);
    });
  }

  verDetalle(evento: any) {
    this.router.navigate(['event', evento.idEvent]);
  }

  editarEvento(evento: any) {
    this.router.navigate(['customize', {evento: JSON.stringify(evento)}]);
  }

  promocionarEvento(evento: any) {
    // Lógica para promocionar el evento en el frontend
  }

  cambiarEstado(evento: any) {
    // Lógica para cambiar el estado del evento en el frontend (por ejemplo, cambiar un campo en el objeto 'evento')
  }
}
