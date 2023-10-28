import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-event',
  styleUrls: ['./host-event.component.css'],
  templateUrl: './host-event.component.html'
})
export class HostEventComponent implements OnInit {

  constructor(private eventService: EventService, private router: Router) { }

  eventos: Event[] = [];

  ngOnInit(): void {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      this.eventService.getEventosFiltrados(usuario.username).subscribe(eventos => {
        this.eventos = eventos;
      });
    }
  }

  verDetalle(evento: any) {
    this.router.navigate(['event', evento.idEvent]);
  }

  editarEvento(evento: any) {
    console.log(evento);
    this.router.navigate(['editEvent', { evento: JSON.stringify(evento) }]);
  }

  promocionarEvento(evento: any) {
  }

  cambiarEstado(evento: any) {
  }
}