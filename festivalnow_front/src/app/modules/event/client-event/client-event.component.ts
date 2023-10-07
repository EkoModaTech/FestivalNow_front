import { Component } from '@angular/core';

@Component({
  selector: 'app-client-event',
  templateUrl: './client-event.component.html',
  styleUrls: ['./client-event.component.css']
})
export class ClientEventComponent {
  eventos = [
    { fechaHora: '2023-09-20 14:00', nombre: 'Concierto en Vivo', direccion: '123 Calle Principal' },
    { fechaHora: '2023-09-25 19:30', nombre: 'Festival de Arte', direccion: '456 Avenida Secundaria' },
    // Agrega más eventos asociados al cliente según tus datos
  ];

  columns: string[] = ['fechaHora', 'nombre', 'direccion', 'acciones'];

  verBoletos(evento: any) {
    // Aquí debes agregar la lógica para llevar al usuario a la vista de boletos del evento en específico.
    // Esto podría incluir la navegación a una nueva ruta.
  }
}
