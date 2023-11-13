import { Component, ViewChild, ElementRef } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.interface';
import { AdsService } from 'src/app/services/ads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    { src: 'https://www.grandespymes.com.ar/wp-content/uploads/2024/02/el-imperativo-personalizar-banca-productos-servicios-financieros.jpg', alt: 'personalizar', text: 'PERSONALIZAR' },
    { src: 'https://cdn0.bodas.com.mx/article/3583/3_2/960/jpg/53853-boda.jpeg', alt: 'bodas', text: 'BODAS' },
    { src: 'https://img.freepik.com/foto-gratis/persona-celebrando-cumpleanos-oficina_23-2149334837.jpg?w=2000', alt: 'cumpleaños', text: 'CUMPLEAÑOS' },
    { src: 'https://www.eleconomista.com.mx/__export/1660069496696/sites/eleconomista/img/2022/08/09/tomorrowland.jpg_1035515469.jpg', alt: 'festivales', text: 'FESTIVALES' },
    { src: 'https://www.hsbnoticias.com/wp-content/uploads/2023/01/concierto-nw.jpg', alt: 'conciertos', text: 'CONCIERTOS' },
    { src: 'https://content.emarket.pe/uploads/sites/01/2016/07/1400000018618-1024x683.jpg', alt: 'deportes', text: 'DEPORTES' }
  ];

  cards: Event[] = [];
  types: any[] = [];
  imageAds: string | null = 'https://www.vivirensarriguren.com/wp-content/uploads/2013/01/publicidad.jpg';
  searchTerm: string = '';
  idAds: number = 0;

  @ViewChild('stripeContainer') stripeContainer!: ElementRef;

  constructor(private eventService: EventService, private adsService: AdsService, private router: Router) { }

  ngOnInit(): void {
    this.eventService.getEventos().subscribe(eventos => {
      this.cards = eventos;
      this.types = this.cards
      .map(card => card.type)
      .filter((type, index, self) => self.indexOf(type) === index)
      .map(type => ({ name: type, checked: false }));
    });
    this.adsService.getAds().subscribe(
      (response) => {
        this.idAds = response.idEvent;
        console.log("El id del ads es: ", this.idAds);
        if (this.idAds != 0) {
          this.eventService.getImageUrl(this.idAds).subscribe(
            (imageUrl) => {
              this.imageAds = imageUrl;
              console.log("El url del ads es: ", this.imageAds);
            },
            (error) => {
              console.error('Error al obtener la URL de la imagen', error);
            }
          );
        }
      },
      (error) => {
        console.error('Error al obtener los anuncios', error);
      }
    );

  }

  scrollLeft() {
    this.stripeContainer.nativeElement.scrollLeft -= 200;
  }


  scrollRight() {
    this.stripeContainer.nativeElement.scrollLeft += 200;
  }

  redireccionarAEvent(id: number) {
    this.router.navigate(['/event', id]);
  }

  get filteredCards() {
    return this.cards.filter(card =>
      (card.name?.toLowerCase() ?? '').includes(this.searchTerm.toLowerCase()) &&
      this.types.filter(type => type.checked).every(type => card.type.includes(type.name))
    );
  }
  navigateToGeneral() {
    this.router.navigate(['/general']);
  }
}
