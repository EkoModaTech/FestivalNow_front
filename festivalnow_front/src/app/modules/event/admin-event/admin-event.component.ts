import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.interface';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-admin-event',
  styleUrls: ['./admin-event.component.css'],
  templateUrl: './admin-event.component.html'
})
export class AdminEventComponent {

  constructor(private eventService: EventService, private router: Router) { }

  eventos: Event[] = [];

  ngOnInit(): void {
    this.eventService.getEventos().subscribe(eventos => {
      this.eventos = eventos;

      // Debug log
      console.log(eventos);
    });
  }

  verDetalle(evento: any) {
    evento = evento.evento.idEvent
    this.router.navigate(['event', evento]);
  }

  editarEvento(evento: any) {
    this.router.navigate(['editEvent', {evento: JSON.stringify(evento)}]);
  }

  eliminarEvento(evento: any) {
    evento = evento.evento.idEvent
    this.eliminarEvento(evento);
    
  }

  cambiarEstado(evento: any) {
    // Lógica para cambiar el estado del evento en el frontend (por ejemplo, cambiar un campo en el objeto 'evento')
    // TODO: Pantalla de cambio de Estado
    console.log(evento)
  }

}
