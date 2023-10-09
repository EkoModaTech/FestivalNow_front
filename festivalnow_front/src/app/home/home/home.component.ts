import { Component, ViewChild, ElementRef } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    {src: 'https://www.grandespymes.com.ar/wp-content/uploads/2024/02/el-imperativo-personalizar-banca-productos-servicios-financieros.jpg', alt: 'personalizar', text: 'PERSONALIZAR'},
    {src: 'https://cdn0.bodas.com.mx/article/3583/3_2/960/jpg/53853-boda.jpeg', alt: 'bodas', text: 'BODAS'},
    {src: 'https://img.freepik.com/foto-gratis/persona-celebrando-cumpleanos-oficina_23-2149334837.jpg?w=2000', alt: 'cumpleaños', text: 'CUMPLEAÑOS'},
    {src: 'https://www.100x100eventos.com/wp-content/uploads/2019/09/fiestas-de-empresas-para-navidad-1.jpg', alt: 'Empresas', text: 'EMPRESAS'},
    {src: 'https://media.ambito.com/p/21d7b7e4011039881433e2e6c95283f9/adjuntos/239/imagenes/040/468/0040468241/karaoke-fotojpg.jpg', alt: 'karaoke', text: 'KARAOKE'},
    {src: 'https://estaticosgn-cdn.deia.eus/clip/a9a5d1bc-8f97-4e44-a98b-68eae954a954_16-9-discover-aspect-ratio_default_0.jpg', alt: 'catas', text: 'CATAS'},
    {src: 'https://www.eleconomista.com.mx/__export/1660069496696/sites/eleconomista/img/2022/08/09/tomorrowland.jpg_1035515469.jpg', alt: 'festivales', text: 'FESTIVALES'},
    {src: 'https://www.hsbnoticias.com/wp-content/uploads/2023/01/concierto-nw.jpg', alt: 'conciertos', text: 'CONCIERTOS'},
    {src: 'https://www.seoptimer.com/es/blog/wp-content/uploads/2022/09/event-de-marketing-digital.jpg', alt: 'conferencias', text: 'CONFERENCIAS'}
  ];

  cards: Event[] = [];
  types: any[] = [ ];
  
  searchTerm: string = '';

  @ViewChild('stripeContainer') stripeContainer!: ElementRef;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEventos().subscribe(eventos => {
      this.cards = eventos;
      this.types = [...new Set(this.cards.map(card => ({ name: card.type, checked: false })))];

    });
    console.log(this.types);
  }

  scrollLeft() {
    this.stripeContainer.nativeElement.scrollLeft -= 200;
  }
  

  scrollRight() {
    this.stripeContainer.nativeElement.scrollLeft += 200;
  }

  get filteredCards() {
    return this.cards.filter(card => 
      card.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      this.types.filter(type => type.checked).every(type => card.type.includes(type.name))
    );
  }
}