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
  @ViewChild('stripeContainerBodas') stripeContainerBodas!: ElementRef;
  @ViewChild('stripeContainerConciertos') stripeContainerConciertos!: ElementRef;
  @ViewChild('stripeContainerFestivales') stripeContainerFestivales!: ElementRef;
  @ViewChild('stripeContainerCumpleanos') stripeContainerCumpleanos!: ElementRef;
  @ViewChild('stripeContainerDeportes') stripeContainerDeportes!: ElementRef;
  constructor(private eventService: EventService) {
    registerLocaleData(localeEs);
  }

  eventos: Event[] = [];
  ciudades: any[] = [];
  searchText: string = '';
  bodasChecked: boolean = true;
  festivalesChecked: boolean = true;
  conciertosChecked: boolean = true;
  cumpleanosChecked: boolean = true;
  deportesChecked: boolean = true;

  ngOnInit(): void {
    this.eventService.getEventos().subscribe(eventos => {
      this.eventos = eventos;
      this.ciudades = this.getCiudades().map(city => ({ name: city, checked: false }));
    });
  }

  getCiudades(): string[] {
    let ciudades: string[] = [];
    this.eventos.forEach(evento => {
      if (evento.city && !ciudades.includes(evento.city.name)) {
        ciudades.push(evento.city.name);
      }
    });
    return ciudades;
  }

  getEventosFiltradosPorCiudades(eventos: any[]) {
    const ciudadesSeleccionadas = this.ciudades.filter(ciudad => ciudad.checked).map(ciudad => ciudad.name);
    if (ciudadesSeleccionadas.length === 0) {
      return eventos.filter(evento => {
        const name = evento.name ? evento.name.toLowerCase() : '';
        const date = evento.date ? evento.date.toLowerCase() : '';
        const city = evento.city && evento.city.name ? evento.city.name.toLowerCase() : '';
        return name.includes(this.searchText?.toLowerCase() || '') || date.includes(this.searchText?.toLowerCase() || '') || city.includes(this.searchText?.toLowerCase() || '');
      });
    } else {
      return eventos.filter(evento => {
        const name = evento.name ? evento.name.toLowerCase() : '';
        const date = evento.date ? evento.date.toLowerCase() : '';
        const city = evento.city && evento.city.name ? evento.city.name.toLowerCase() : '';
        return (evento.city && ciudadesSeleccionadas.includes(evento.city.name)) && (name.includes(this.searchText?.toLowerCase() || '') || date.includes(this.searchText?.toLowerCase() || '') || city.includes(this.searchText?.toLowerCase() || ''));
      });
    }
  }

  get bodasFiltered() {
    return this.getEventosFiltradosPorCiudades(this.eventos.filter(evento => evento.type === 'Boda'))
      .filter(boda => {
        const name = boda.name ? boda.name.toLowerCase() : '';
        const date = boda.date ? boda.date.toLowerCase() : '';
        return name.includes(this.searchText?.toLowerCase() || '') || date.includes(this.searchText?.toLowerCase() || '');
      });
  }
  
  get festivalesFiltered() {
    return this.getEventosFiltradosPorCiudades(this.eventos.filter(evento => evento.type === 'Festival'))
      .filter(festival => {
        const name = festival.name ? festival.name.toLowerCase() : '';
        const date = festival.date ? festival.date.toLowerCase() : '';
        return name.includes(this.searchText?.toLowerCase() || '') || date.includes(this.searchText?.toLowerCase() || '');
      });
  }
  
  get conciertosFiltered() {
    return this.getEventosFiltradosPorCiudades(this.eventos.filter(evento => evento.type === 'Concierto'))
      .filter(concierto => {
        const name = concierto.name ? concierto.name.toLowerCase() : '';
        const date = concierto.date ? concierto.date.toLowerCase() : '';
        return name.includes(this.searchText?.toLowerCase() || '') || date.includes(this.searchText?.toLowerCase() || '');
      });
  }
  
  get cumpleanosFiltered() {
    return this.getEventosFiltradosPorCiudades(this.eventos.filter(evento => evento.type === 'Cumpleaños'))
      .filter(cumpleanos => {
        const name = cumpleanos.name ? cumpleanos.name.toLowerCase() : '';
        const date = cumpleanos.date ? cumpleanos.date.toLowerCase() : '';
        return name.includes(this.searchText?.toLowerCase() || '') || date.includes(this.searchText?.toLowerCase() || '');
      });
  }
  
  get deportesFiltered() {
    return this.getEventosFiltradosPorCiudades(this.eventos.filter(evento => evento.type === 'Deportes'))
      .filter(deporte => {
        const name = deporte.name ? deporte.name.toLowerCase() : '';
        const date = deporte.date ? deporte.date.toLowerCase() : '';
        return name.includes(this.searchText?.toLowerCase() || '') || date.includes(this.searchText?.toLowerCase() || '');
      });
  }

  scrollLeft(section: string) {
    if (section === 'bodas') {
      this.stripeContainerBodas.nativeElement.scrollLeft -= 200;
    } else if (section === 'festivales') {
      this.stripeContainerFestivales.nativeElement.scrollLeft -= 200;
    } else if (section === 'conciertos') {
      this.stripeContainerConciertos.nativeElement.scrollLeft -= 200;
    } else if (section === 'cumpleanos') {
      this.stripeContainerCumpleanos.nativeElement.scrollLeft -= 200;
    } else if (section === 'deportes') {
      this.stripeContainerDeportes.nativeElement.scrollLeft -= 200;
    }
  }

  scrollRight(section: string) {
    if (section === 'bodas') {
      this.stripeContainerBodas.nativeElement.scrollLeft += 200;
    } else if (section === 'festivales') {
      this.stripeContainerFestivales.nativeElement.scrollLeft += 200;
    } else if (section === 'conciertos') {
      this.stripeContainerConciertos.nativeElement.scrollLeft += 200;
    } else if (section === 'cumpleanos') {
      this.stripeContainerCumpleanos.nativeElement.scrollLeft += 200;
    } else if (section === 'deportes') {
      this.stripeContainerDeportes.nativeElement.scrollLeft += 200;
    }
  }
}