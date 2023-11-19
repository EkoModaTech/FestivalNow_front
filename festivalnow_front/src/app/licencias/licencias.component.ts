import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LicenseService } from 'src/app/services/license.service';
import { Licencia } from '../models/licencia.interface';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.interface';


const ELEMENT_DATA: Licencia[] = [
  {id: 1, tipo: 'Tipo 1', fechaExpiracion: new Date('2022-12-31'), activa: true},
  {id: 2, tipo: 'Tipo 2', fechaExpiracion: new Date('2023-01-31'), activa: false},
  {id: 3, tipo: 'Tipo 3', fechaExpiracion: new Date('2023-02-28'), activa: true},
  {id: 4, tipo: 'Tipo 4', fechaExpiracion: new Date('2023-03-31'), activa: false},
  {id: 5, tipo: 'Tipo 5', fechaExpiracion: new Date('2023-04-30'), activa: true},
  {id: 6, tipo: 'Tipo 6', fechaExpiracion: new Date('2023-05-31'), activa: false},
  {id: 7, tipo: 'Tipo 7', fechaExpiracion: new Date('2023-06-30'), activa: true},
  {id: 8, tipo: 'Tipo 8', fechaExpiracion: new Date('2023-07-31'), activa: false},
  {id: 9, tipo: 'Tipo 9', fechaExpiracion: new Date('2023-08-31'), activa: true},
  {id: 10, tipo: 'Tipo 10', fechaExpiracion: new Date('2023-09-30'), activa: false},
  {id: 11, tipo: 'Tipo 11', fechaExpiracion: new Date('2023-10-31'), activa: true},
  {id: 12, tipo: 'Tipo 12', fechaExpiracion: new Date('2023-11-30'), activa: false},
  {id: 13, tipo: 'Tipo 13', fechaExpiracion: new Date('2023-12-31'), activa: true},
  {id: 14, tipo: 'Tipo 14', fechaExpiracion: new Date('2024-01-31'), activa: false},
  {id: 15, tipo: 'Tipo 15', fechaExpiracion: new Date('2024-02-29'), activa: true},
  {id: 16, tipo: 'Tipo 16', fechaExpiracion: new Date('2024-03-31'), activa: false},
  {id: 17, tipo: 'Tipo 17', fechaExpiracion: new Date('2024-04-30'), activa: true},
  {id: 18, tipo: 'Tipo 18', fechaExpiracion: new Date('2024-05-31'), activa: false},
  {id: 19, tipo: 'Tipo 19', fechaExpiracion: new Date('2024-06-30'), activa: true},
  {id: 20, tipo: 'Tipo 20', fechaExpiracion: new Date('2024-07-31'), activa: false},
];

@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html',
  styleUrls: ['./licencias.component.css']
})
export class LicenciasComponent {

  constructor(private licenseService: LicenseService, private eventService: EventService) { }

  license_data: Licencia[] = []
  eventos: Event[] = []

  displayedColumns = ['id', 'tipo', 'fechaExpiracion', 'activa'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  // TODO: Confirmación de endpoint GET de todas las licencias.
  // dataSource = new MatTableDataSource(this.license_data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      this.eventService.getEventosFiltrados(usuario.username).subscribe(eventos => {
        this.eventos = eventos;
        
        if (eventos.length > 0) {
          this.onEventoChange(eventos[0].idEvent);
        }
      });
    }
  }

  onEventoChange(eventId: string) {
    /*this.licenseService.getLicenciasPorEvento(eventId).subscribe(licenses => {
      this.dataSource.data = licenses; // Actualiza el dataSource con las licencias del evento
    });*/
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}