import { Component, ViewChild, ElementRef } from '@angular/core';

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
  cards = [
    {src: 'https://latiquetera.com/img/attach/Event/2831/43692/event_normal.8dc4a3f2e32c2a63eb20112c7ced3625.png', title: 'METALLICA', day: '01', month: 'sept', year: '2023', genres: ['Rock', 'Metal']},
    {src: 'https://i.pinimg.com/originals/4c/59/d4/4c59d43787e3dfdf039f77892fec9bbc.jpg', title: 'GUNS AND ROSES', day: '16', month: 'jun', year: '2024', genres: ['Rock']},
    {src: 'https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vYmFhMjk5NGI5NWZiMWRjNmQ1OGNiMGU2NTk0MDFkYTllNGE2Y2YxNi5qcGc=', title: 'BILLIE EILISH', day: '01', month: 'sept', year: '2023', genres: ['Pop']},
    {src: 'https://www.improvisandoradio.co/wp-content/uploads/2023/03/FlyerManeskin.png', title: 'MANESKIN', day: '01', month: 'jun', year: '2023', genres: ['Rock', 'Pop']},
    {src: 'https://i.pinimg.com/474x/ef/b0/ab/efb0abc211cdeb5ed29b548b9d80bde3--michael-jackson-thriller-thrillers.jpg', title: 'MICHAEL JACKSON', day: '01', month: 'sept', year: '2023', genres: ['Pop']},
    {src: 'https://www.castellonvirtual.es/wp-content/uploads/2019/04/boney-m-concierto-almassora.jpg', title: 'BONEY M', day: '01', month: 'jun', year: '2023', genres: ['Pop', 'Disco']},
    {src: 'https://live.staticflickr.com/4005/4598362317_7de295667e_w.jpg', title: 'PINK FLOYD', day: '10', month: 'jun', year: '2023', genres: ['Rock', 'Psychedelic rock']},
    {src: 'https://pbs.twimg.com/media/B6tVKZsIcAA8xXQ?format=jpg&name=large', title: 'CANSERBERO', day: '11', month: 'oct', year: '2023', genres: ['Hip hop', 'Rap']},
    {src: 'https://i.pinimg.com/originals/cf/28/36/cf28364fcef1c704e363c9843361803b.jpg' , title:'DAFT PUNK' , day:'14' , month:'jan' , year:'2024' , genres:['Electronic'] },
    {src: 'https://i.pinimg.com/originals/56/c7/68/56c76873a4a2c27be7e6abc660fe4d71.jpg' , title:'BOB MARLEY' , day:'15' , month:'feb' , year:'2024' , genres:['Reggae'] },
    {src: 'https://i.pinimg.com/originals/ee/ab/ba/eeabba46dd63eb8a503de495996eb6fb.jpg' , title:'CHET BAKER' , day:'16' , month:'mar' , year:'2024' , genres:['Jazz'] }
  ];
  genres: any[] = [ ];
  
  searchTerm: string = '';

  @ViewChild('stripeContainer') stripeContainer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.genres = this.getGenres().map(genre => ({ name: genre, checked: false }));

  }

  getGenres(): string[] {
    let genres: string[] = [];
    this.cards.forEach(card => {
      card.genres.forEach(genre => {
        if (!genres.includes(genre)) {
          genres.push(genre);
        }
      });
    });
    return genres;
  }

  scrollLeft() {
    this.stripeContainer.nativeElement.scrollLeft -= 200;
  }

  scrollRight() {
    this.stripeContainer.nativeElement.scrollLeft += 200;
  }
  get filteredCards() {
    return this.cards.filter(card => 
      card.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      this.genres.filter(genre => genre.checked).every(genre => card.genres.includes(genre.name))
    );
  }
}