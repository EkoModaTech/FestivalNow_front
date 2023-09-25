import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent {
  eventos = [
    { fechaHora: '2023-09-20 14:00', nombre: 'Concierto en Vivo' },
    { fechaHora: '2023-09-25 19:30', nombre: 'Festival de Arte' },
    // Agrega más eventos según tu necesidad
  ];

  columns: string[] = ['fechaHora', 'nombre', 'acciones'];

  verDetalle(evento: any) {
    // Lógica para ver el detalle del evento en el frontend
  }

  editarEvento(evento: any) {
    // Lógica para editar el evento en el frontend
  }

  cambiarEstado(evento: any) {
    // Lógica para cambiar el estado del evento en el frontend (por ejemplo, cambiar un campo en el objeto 'evento')
  }

}
