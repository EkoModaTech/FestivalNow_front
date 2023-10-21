import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotFoundComponent } from 'src/app/home/not-found/not-found.component';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/service/auth.service';

const URL = environment.backendAPI+"/event/event/"

type Event = {
  // Basic
  idEvent: number,
  name: string,
  description: string,
  date: string,// Standard date format with hour
  city: string,
  place: string, // Specific place
  type: string,
  ability: number,
  img_url: string,

  // About bussiness
  url: string,
  logistic: string
  state: string,

  // Optional
  place_map_image: string,

}


const MockEvent: any = {
  id: "230802095436364",
  name: "Evento de prueba",
  date: "Fecha de prueba",
  ability: 100001,
  description: "a description",
  type: "a type",
  url: "https://cdn.eticket.co/imagenes/imgEventos/230802095436364_poster_cartel_combos.jpg",
  state: "Activo",
  direction: "Dirección de prueba",
  visivility: "Público",
  city: {
    "idCity": 1,
    "name": "Ciudad de prueba",
    "department": null
  },
  logistics: "a logistics",
  created_by: "a created_by",



  place_map_image: "https://api.eticket.com.co/v2/structures/mappingImage/14013",
  "hour": "13:00 HRS",
  "min_age": "18 años en todas las localidades",
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
 function defaultObject(event: any, defaults: any): any{
  const object = defaults;
  for (const key in defaults) {
    if (event[key] !== null && event[key] !== undefined) {
      object[key] = event[key];
    }
  }
  return object;
 }

@Component({
  selector: 'app-specific-event',
  templateUrl: './specific-event.component.html',
  styleUrls: ['./specific-event.component.css']
})
export class SpecificEventComponent {
  
  event?:any = MockEvent
  loading: boolean = true
  error: boolean = false
  notFound: boolean = false

  mapUri?: SafeResourceUrl

  constructor(public sanitizer: DomSanitizer,private route: ActivatedRoute,private router: Router, private http: HttpClient, private auth: AuthService){

  }
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.auth.token
    })
  };
  
  getEvent = async (id: string) => {
    this.http.get(URL + id, this.httpOptions).subscribe({
      next: (data: any) => {
        this.event = defaultObject(data, MockEvent)
        this.mapUri = this.sanitizer.bypassSecurityTrustResourceUrl(this.event.event_map_section.value)
        this.loading = false
      },
      error: (error: any) => {
          console.log("ERROR: ", error)

          this.error = error.error.error
          this.notFound = error.status === 404
          if(error.status === 403){
            this.router.navigate(['/login'])
          }
          this.loading = false
        },
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      if (id) {
        this.getEvent(id);
      }
    });
  }
}


