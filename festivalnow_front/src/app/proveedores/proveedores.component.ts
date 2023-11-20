import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Proveedor } from '../models/proveedor.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../shared/service/auth.service';
import { environment } from 'src/environments/environment';
import { Event } from '../models/event.interface';
import { EventService } from '../services/event.service';

const PATH = environment.backendAPI+"/providers/"

const ELEMENT_DATA: Proveedor[] = [
  {id: 1, name: 'Proveedor 1', address: '123 Main St', contact: '123-456-7890'},
  {id: 2, name: 'Proveedor 2', address: '456 Oak Ave', contact: '987-654-3210'},
  {id: 3, name: 'Proveedor 3', address: '789 Pine Ln', contact: '456-789-0123'},
  {id: 4, name: 'Proveedor 4', address: 'Address 4', contact: 'Contact 4'},
  {id: 5, name: 'Proveedor 5', address: 'Address 5', contact: 'Contact 5'},
  {id: 6, name: 'Proveedor 6', address: 'Address 6', contact: 'Contact 6'},
  {id: 7, name: 'Proveedor 7', address: 'Address 7', contact: 'Contact 7'},
  {id: 8, name: 'Proveedor 8', address: 'Address 8', contact: 'Contact 8'},
  {id: 9, name: 'Proveedor 9', address: 'Address 9', contact: 'Contact 9'},
  {id: 10, name: 'Proveedor 10', address: 'Address 10', contact: 'Contact 10'},
  {id: 11, name: 'Proveedor 11', address: 'Address 11', contact: 'Contact 11'},
  {id: 12, name: 'Proveedor 12', address: 'Address 12', contact: 'Contact 12'},
  {id: 13, name: 'Proveedor 13', address: 'Address 13', contact: 'Contact 13'},
  {id: 14, name: 'Proveedor 14', address: 'Address 14', contact: 'Contact 14'},
  {id: 15, name: 'Proveedor 15', address: 'Address 15', contact: 'Contact 15'},
  {id: 16, name: 'Proveedor 16', address: 'Address 16', contact: 'Contact 16'},
  {id: 17, name: 'Proveedor 17', address: 'Address 17', contact: 'Contact 17'},
  {id: 18, name: 'Proveedor 18', address: 'Address 18', contact: 'Contact 18'},
  {id: 19, name: 'Proveedor 19', address: 'Address 19', contact: 'Contact 19'},
  {id: 20, name: 'Proveedor 20', address: 'Address 20', contact: 'Contact 20'},
];

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements AfterViewInit, OnInit {

  loading: boolean = true
  error: boolean = false
  data: any = ELEMENT_DATA
  displayedColumns = ['id', 'name', 'address', 'contact'];
  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private eventService: EventService
  ) {}

    eventos: Event[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.auth.token
    })
  };


  getProviders = async () => {
    this.http.get(PATH, this.httpOptions).subscribe({
      next: (data: any) => {
        this.data = data
        // this.event = defaultObject(data, MockEvent)
        this.loading = false
      },
      error: (error: any) => {
          console.log("ERROR: ", error)

          this.error = error.error.error
          // this.notFound = error.status === 404
          // if(error.status === 403){
          //   this.router.navigate(['/login'])
          // }
          this.loading = false
        },
      });
  }

  ngOnInit() {
    this.getProviders();

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


  onEventoChange(eventId: String) {
    console.log('Flag');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}