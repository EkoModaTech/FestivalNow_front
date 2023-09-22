import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


const MockEvent: any = {
  general: {
    title: "FESTIVAL CORDILLERA - COMBO 2 DIAS",
    date: "SEPTIEMBRE 23 Y 24 13:00 HRS",
    place: "Parque Metropolitano Simón Bolívar",
    place_details: "Bogotá, Cundinamarca Calle 63 y 53 entre carreras 48 y 68",
    ticket_type_name: "COMBO VIP ETAPA 4",
    cost: "$1.354.000,00"
  },
  title: "FESTIVAL CORDILLERA",
  horizontal_img: "https://cdn.eticket.co/imagenes/imgEventos/230626165607652_estelar_Cat1.jpg",
  vertical_img: "https://cdn.eticket.co/imagenes/imgEventos/230802095436364_poster_cartel_combos.jpg",
  place_map_image: "https://api.eticket.com.co/v2/structures/mappingImage/14021",
  general_event_information: {
    "place": "Parque Simón Bolivar",
    "date": "23 y 24 de septiembre de 2023",
    "hour": "13:00 HRS",
    "min_age": "18 años en todas las localidades"
  },
  tickets_information:{
    "title":"LOCALIDADES, AFORO Y PRECIO BOLETERÍA",
    headers: [
      "LOCALIDAD",
      "Aforo",
      "Precio",
      "Servicio",
      "TOTAL"
    ],
    values: [
      []
    ],

  },
  event_sale_stages: {
    title: "ETAPAS DE VENTA",
    stages: [
      {
        title: "PREVENTA AVAL SUDAMERICAN ROCKERS:",
        description: "Venta válida desde las 9:00 a.m. del jueves 4 de mayo hasta el lunes 8 de mayo de 2023 a las 8:59 a.m. o hasta agotar 1.600 boletas disponibles por fecha para la PREVENTA AVAL en todas las localidades, lo primero que ocurra.  La PREVENTA AVAL no es acumulable con otros descuentos, promociones y/o campañas."
      }
    ]
  },
  event_map_section: {
    title: "Mapa del Sitio",
    value : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6379687692615!2d-74.09603282537083!3d4.6584795953163605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85921810393d%3A0x1d953f644042b03b!2sParque%20Metropolitano%20Sim%C3%B3n%20Bol%C3%ADvar!5e0!3m2!1sen!2sco!4v1695358007497!5m2!1sen!2sco",
  }
}


@Component({
  selector: 'app-specific-event',
  templateUrl: './specific-event.component.html',
  styleUrls: ['./specific-event.component.css']
})
export class SpecificEventComponent {
  event:any
  mapUri: SafeResourceUrl
  constructor(public sanitizer: DomSanitizer){
    this.event = MockEvent
    this.mapUri = this.sanitizer.bypassSecurityTrustResourceUrl(this.event.event_map_section.value)
  }


}


