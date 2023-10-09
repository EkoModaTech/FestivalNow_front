import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { EventService } from 'src/app/services/event.service';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-customize',
  styleUrls: ['./customize.component.css'],
  imports: [ 
    FormsModule, 
    ReactiveFormsModule 
  ],
  template:
  `
  <div class="container">
    <h2>Crear un Evento</h2>
    <form (submit)="submitEvent()" [formGroup]="eventForm">
      <div class="form-group">
        <label for="tipoEvento">Tipo de Evento:</label>
        <select id="tipoEvento" class="form-control" name="tipoEvento" formControlName="typeControl" (change)="updateType()">  <!--[(ngModel)]="nuevoEvento.tipoEvento"-->
          <option value="Concierto">Concierto</option>
          <option value="Festival">Festival</option>
          <option value="Deportes">Deportes</option>
          <!-- Agrega más opciones según tus necesidades -->
        </select>
      </div>
  
      <div class="form-group">
        <label for="departamento">Departamento:</label>
        <select id="departamento" class="form-control" name="departamento">  <!-- [(ngModel)]="nuevoEvento.departamento" -->
          <option value="Antioquia">Antioquia</option>
          <option value="Bogotá">Bogotá</option>
          <option value="Valle del Cauca">Valle del Cauca</option>
          <!-- Agrega más opciones según tus necesidades --> 
        </select>
      </div>
  
      <div class="form-group">
        <label for="municipio">Municipio:</label>
        <select id="municipio" class="form-control" name="municipio" formControlName="cityControl" (change)="updateCity()"> <!--[(ngModel)]="nuevoEvento.municipio" -->
          <option value="Medellín">Medellín</option>
          <option value="Cali">Cali</option>
          <option value="Bogotá">Bogotá</option>
          <!-- Agrega más opciones según tus necesidades -->
        </select>
      </div>
  
      <div class="form-group">
        <label for="entretenimiento">Entretenimiento:</label>
        <select id="entretenimiento" class="form-control"  name="entretenimiento"> <!-- [(ngModel)]="nuevoEvento.entretenimiento" -->
          <option value="Música">Música</option>
          <option value="Deportes">Deportes</option>
          <option value="Cine">Cine</option>
          <!-- Agrega más opciones según tus necesidades -->
        </select>
      </div>
  
      <div class="form-group">
        <label for="capacidad">Capacidad:</label>
        <input #box type="number" id="capacidad" class="form-control"name="capacidad" value={{nuevoEvento.ability}} (keyup)="onKey(box.value)"> <!--  [(ngModel)]="nuevoEvento.capacidad" -->
      </div>
  
      <button type="submit" class="btn btn-primary">Listo</button>
    </form>
  </div>
  `
  ,
})
export class CustomizeComponent {

  nuevoEvento: any = {}; // Objeto para almacenar los datos del nuevo evento

  eventForm: FormGroup = new FormGroup(
    {
      typeControl: new FormControl(),
      cityControl: new FormControl()
    }
    );

  private typeArr = ["Concierto", "Festival", "Deportes"]
  private cityArr = ["Medellín", "Cali", "Bogotá"]

  private eventoNuevo = true

  constructor(private route: ActivatedRoute, private eventService: EventService, private _location: Location) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('evento')) {
      this.eventoNuevo = false
      this.nuevoEvento = JSON.parse(this.route.snapshot.paramMap.get('evento') || '').evento
    }
  }

  ngAfterViewInit() {
    if (this.typeArr.indexOf(this.nuevoEvento.type) != -1) {
      this.eventForm.controls['typeControl'].setValue(this.typeArr[this.typeArr.indexOf(this.nuevoEvento.type)]);
    }
    if (this.cityArr.indexOf(this.nuevoEvento.city) != -1) {
      this.eventForm.controls['cityControl'].setValue(this.cityArr[this.cityArr.indexOf(this.nuevoEvento.city)]);
    }
  }

  submitEvent() {
    if(this.eventoNuevo){
      this.crearEvento()
    }
    else {
      this.actualizarEvento()
      console.log(this._location)
      this._location.back();
      
    }  
  }

  crearEvento() {
    this.eventService.createEvent(this.nuevoEvento).subscribe(resp => console.log(resp));
  }

  actualizarEvento() {
    this.eventService.updateEvent(this.nuevoEvento).subscribe(resp => console.log(resp));
  }

  updateType() {
    this.nuevoEvento.type = this.eventForm.controls['typeControl'].value;
  }

  updateCity() {
    this.nuevoEvento.city = this.eventForm.controls['cityControl'].value;
  }

  onKey(value: string) {
    this.nuevoEvento.ability = Number(value);
  }

}
