import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.interface';
import { Router } from '@angular/router'; 
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import { Ticket } from 'src/app/models/tickets.interface';

@Component({
  selector: 'app-client-event',
  templateUrl: './client-event.component.html',
  styleUrls: ['./client-event.component.css']
})
export class ClientEventComponent {

  constructor(private eventService: EventService, private router: Router, private ticketService: TicketServiceService) { }

  eventos: Event[] = [];
  tickets: Ticket[] = [];

  ngOnInit(): void {
    this.eventService.getEventos().subscribe(eventos => {
      this.eventos = eventos;
      console.log(eventos);

      this.ticketService.getTickets().subscribe((response: any) => {
        const rawTickets = response as Ticket[];
        this.tickets = rawTickets.map(ticket => {
          const event = this.eventos.find(evento => evento.idEvent === ticket.idEvent);
          return {
            ...ticket,
            eventName: event ? event.name : 'Evento no encontrado'
          };
        });
        console.log(this.tickets);
      }, error => {
        console.error(error);
      });
    });
  }

  verDetalleEvento(id: number | null) {
    if (id !== null) {
      this.router.navigate(['event', id]);
    }
  }
}