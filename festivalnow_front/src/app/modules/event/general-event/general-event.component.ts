import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.interface';

@Component({
  selector: 'app-general-event',
  templateUrl: './general-event.component.html',
  styleUrls: ['./general-event.component.css']
})
export class GeneralEventComponent implements OnInit {
  
  @ViewChild('stripeContainerConciertos') stripeContainerConciertos!: ElementRef;
  @ViewChild('stripeContainerFestivales') stripeContainerFestivales!: ElementRef;
  constructor(private eventService: EventService) {
    registerLocaleData(localeEs);
  }
  
  eventos: Event[] = [];
  ciudades: any[] = [];
  searchText: string = '';
  bodasChecked: boolean = true;
  festivalesChecked: boolean = true;

  ngOnInit(): void {
    this.ciudades = this.getCiudades().map(city => ({ name: city, checked: false }));
    this.eventService.getEventos().subscribe(eventos => {
      this.eventos = eventos;
    });
  }

  getCiudades(): string[] {
    let ciudades: string[] = [];
    this.eventos.forEach(evento => {
      if (evento.city && !ciudades.includes(evento.city)) {
        ciudades.push(evento.city);
      }
    });
    return ciudades;
  }

  getEventosFiltradosPorCiudades(eventos: any[]) {
    const ciudadesSeleccionadas = this.ciudades.filter(ciudad => ciudad.checked).map(ciudad => ciudad.name);
    if (ciudadesSeleccionadas.length === 0) {
      return eventos;
    } else {
      return eventos.filter(evento => ciudadesSeleccionadas.includes(evento.city));
    }
  }

  get bodasFiltered() {
    return this.getEventosFiltradosPorCiudades(this.eventos.filter(evento => evento.type === 'Boda')).filter(boda => boda.name.toLowerCase().includes(this.searchText.toLowerCase()) || boda.date.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  get festivalesFiltered() {
    return this.getEventosFiltradosPorCiudades(this.eventos.filter(evento => evento.type === 'Festival')).filter(festival => festival.name.toLowerCase().includes(this.searchText.toLowerCase()) || festival.date.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  scrollLeft(section: string) {
    if (section === 'bodas') {
      this.stripeContainerConciertos.nativeElement.scrollLeft -= 200;
    } else if (section === 'festivales') {
      this.stripeContainerFestivales.nativeElement.scrollLeft -= 200;
    }
  }

  scrollRight(section: string) {
    if (section === 'bodas') {
      this.stripeContainerConciertos.nativeElement.scrollLeft += 200;
    } else if (section === 'festivales') {
      this.stripeContainerFestivales.nativeElement.scrollLeft += 200;
    }
  }
}