import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-general-event',
  templateUrl: './general-event.component.html',
  styleUrls: ['./general-event.component.css']
})
export class GeneralEventComponent {

  @ViewChild('stripeContainerConciertos') stripeContainerConciertos!: ElementRef;
  @ViewChild('stripeContainerFestivales') stripeContainerFestivales!: ElementRef;
  
  conciertos = [
    {src: 'https://www.grandespymes.com.ar/wp-content/uploads/2024/02/el-imperativo-personalizar-banca-productos-servicios-financieros.jpg', alt: 'personalizar', text: 'MIERCOLES 6 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE RAP', ciudad: 'Medellin'},
    {src: 'https://cdn0.bodas.com.mx/article/3583/3_2/960/jpg/53853-boda.jpeg', alt: 'bodas', text: 'SÁBADO 9 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE SALSA', ciudad: 'Bogotá'},
    {src: 'https://img.freepik.com/foto-gratis/persona-celebrando-cumpleanos-oficina_23-2149334837.jpg?w=2000', alt: 'cumpleaños', text: 'SÁBADO 9 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE BACHATA', ciudad: 'Cali'},
    {src: 'https://lacarteleramx.com/wp-content/uploads/2021/09/07e3e4d0-metallica_blacklist_lacarteleramx.jpg', alt: 'Empresas', text: 'VIERNES 15 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE ROCK', ciudad: 'Barranquilla'},
    {src: 'https://media.ambito.com/p/21d7b7e4011039881433e2e6c95283f9/adjuntos/239/imagenes/040/468/0040468241/karaoke-fotojpg.jpg', alt: 'karaoke', text: 'MIERCOLES 20 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE POP', ciudad: 'Cartagena'},
    {src: 'https://estaticosgn-cdn.deia.eus/clip/a9a5d1bc-8f97-4e44-a98b-68eae954a954_16-9-discover-aspect-ratio_default_0.jpg', alt: 'catas', text: 'DOMINGO 3 DE JULIO DE 2024', title: 'CONCIERTO DE REGGAE', ciudad: 'Santa Marta'},
    {src: 'https://www.eleconomista.com.mx/__export/1660069496696/sites/eleconomista/img/2022/08/09/tomorrowland.jpg_1035515469.jpg', alt: 'festivales', text: 'LUNES 25 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE METAL', ciudad: 'Pereira'},
    {src: 'https://www.hsbnoticias.com/wp-content/uploads/2023/01/concierto-nw.jpg', alt: 'conciertos', text: 'MARTES 26 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE RAP', ciudad: 'Manizales'},
    {src: 'https://www.seoptimer.com/es/blog/wp-content/uploads/2022/09/event-de-marketing-digital.jpg', alt: 'conferencias', text: 'MIERCOLES 27 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE HIP HOP', ciudad: 'Armenia'},
  ];

  festivales = [
    {src: 'https://img.freepik.com/vector-premium/banner-horizontal-carnival-brazilian-festival-diseno-plantilla-portada-redes-sociales_288411-1953.jpg?w=2000', alt: 'personalizar', text: 'MIERCOLES 6 DE SEPTIEMBRE 2023', title: 'EXTRAVAGANZA', ciudad: 'Medellin'},
    {src: 'https://cdn0.bodas.com.mx/article/3583/3_2/960/jpg/53853-boda.jpeg', alt: 'bodas', text: 'SÁBADO 9 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE SALSA', ciudad: 'Bogotá'},
    {src: 'https://img.freepik.com/foto-gratis/persona-celebrando-cumpleanos-oficina_23-2149334837.jpg?w=2000', alt: 'cumpleaños', text: 'SÁBADO 9 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE BACHATA', ciudad: 'Cali'},
    {src: 'https://www.100x100eventos.com/wp-content/uploads/2019/09/fiestas-de-empresas-para-navidad-1.jpg', alt: 'Empresas', text: 'VIERNES 15 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE ROCK', ciudad: 'Barranquilla'},
    {src: 'https://media.ambito.com/p/21d7b7e4011039881433e2e6c95283f9/adjuntos/239/imagenes/040/468/0040468241/karaoke-fotojpg.jpg', alt: 'karaoke', text: 'MIERCOLES 20 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE POP', ciudad: 'Cartagena'},
    {src: 'https://estaticosgn-cdn.deia.eus/clip/a9a5d1bc-8f97-4e44-a98b-68eae954a954_16-9-discover-aspect-ratio_default_0.jpg', alt: 'catas', text: 'DOMINGO 3 DE JULIO DE 2024', title: 'CONCIERTO DE REGGAE', ciudad: 'Santa Marta'},
    {src: 'https://www.eleconomista.com.mx/__export/1660069496696/sites/eleconomista/img/2022/08/09/tomorrowland.jpg_1035515469.jpg', alt: 'festivales', text: 'LUNES 25 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE METAL', ciudad: 'Pereira'},
    {src: 'https://www.hsbnoticias.com/wp-content/uploads/2023/01/concierto-nw.jpg', alt: 'conciertos', text: 'MARTES 26 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE RAP', ciudad: 'Manizales'},
    {src: 'https://www.seoptimer.com/es/blog/wp-content/uploads/2022/09/event-de-marketing-digital.jpg', alt: 'conferencias', text: 'MIERCOLES 27 DE SEPTIEMBRE 2023', title: 'CONCIERTO DE HIP HOP', ciudad: 'Armenia'},
  ];

  ciudades: any[] = [ ];
  searchText: string = '';
  conciertosChecked: boolean = true;
  festivalesChecked: boolean = true;

  ngOnInit(): void {
    this.ciudades = this.getCiudades().map(ciudad => ({ name: ciudad, checked: false }));
  }

  getCiudades(): string[] {
    let ciudades: string[] = [];
    this.conciertos.forEach(concierto => {
      if (!ciudades.includes(concierto.ciudad)) {
        ciudades.push(concierto.ciudad);
      }
    });
    this.festivales.forEach(festival => {
      if (!ciudades.includes(festival.ciudad)) {
        ciudades.push(festival.ciudad);
      }
    });
    return ciudades;
  }


  getEventosFiltradosPorCiudades(eventos: any[]) {
    const ciudadesSeleccionadas = this.ciudades.filter(ciudad => ciudad.checked).map(ciudad => ciudad.name);
    if (ciudadesSeleccionadas.length === 0) {
      return eventos;
    } else {
      return eventos.filter(evento => ciudadesSeleccionadas.includes(evento.ciudad));
    }
  }
  
  get conciertosFiltered() {
    return this.getEventosFiltradosPorCiudades(this.conciertos).filter(concierto => concierto.title.toLowerCase().includes(this.searchText.toLowerCase()) || concierto.text.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  
  get festivalesFiltered() {
    return this.getEventosFiltradosPorCiudades(this.festivales).filter(festival => festival.title.toLowerCase().includes(this.searchText.toLowerCase()) || festival.text.toLowerCase().includes(this.searchText.toLowerCase()));
  }
  
  scrollLeft(section: string) {
    if (section === 'conciertos') {
      this.stripeContainerConciertos.nativeElement.scrollLeft -= 200;
    } else if (section === 'festivales') {
      this.stripeContainerFestivales.nativeElement.scrollLeft -= 200;
    }
  }
  
  scrollRight(section: string) {
    if (section === 'conciertos') {
      this.stripeContainerConciertos.nativeElement.scrollLeft += 200;
    } else if (section === 'festivales') {
      this.stripeContainerFestivales.nativeElement.scrollLeft += 200;
    }
  }

}
