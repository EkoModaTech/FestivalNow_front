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

  get conciertosFiltered() {
    return this.getEventosFiltradosPorCiudades(this.eventos.filter(evento => evento.type === 'Concierto')).filter(concierto => concierto.name.toLowerCase().includes(this.searchText.toLowerCase()) || concierto.date.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  get cumpleanosFiltered() {
    return this.getEventosFiltradosPorCiudades(this.eventos.filter(evento => evento.type === 'Cumpleaños')).filter(cumpleanos => cumpleanos.name.toLowerCase().includes(this.searchText.toLowerCase()) || cumpleanos.date.toLowerCase().includes(this.searchText.toLowerCase()));
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
    }
  }
}