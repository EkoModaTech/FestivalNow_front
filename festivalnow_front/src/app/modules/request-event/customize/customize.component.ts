import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-customize',
  styleUrls: ['./customize.component.css'],
  template:
  `
  <div class="container">
    <h2>Crear un Evento</h2>
    <form (submit)="crearEvento()">
      <div class="form-group">
        <label for="tipoEvento">Tipo de Evento:</label>
        <select id="tipoEvento" class="form-control" name="tipoEvento">  <!--[(ngModel)]="nuevoEvento.tipoEvento"-->
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
        <select id="municipio" class="form-control" name="municipio"> <!--[(ngModel)]="nuevoEvento.municipio" -->
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
        <input type="number" id="capacidad" class="form-control"name="capacidad"> <!--  [(ngModel)]="nuevoEvento.capacidad" -->
      </div>
  
      <button type="submit" class="btn btn-primary">Listo</button>
    </form>
  </div>
  `
  ,
})
export class CustomizeComponent {

  nuevoEvento: any = {}; // Objeto para almacenar los datos del nuevo evento

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('evento')) {
      this.nuevoEvento = JSON.parse(this.route.snapshot.paramMap.get('evento') || '')
      
      // Debug log
      console.log(this.nuevoEvento)
    }
  }

  crearEvento() {
    // Aquí puedes agregar la lógica para enviar los datos del evento al servidor
    // Por ahora, solo mostraremos los datos en la consola
    console.log(this.nuevoEvento);
  }
}
