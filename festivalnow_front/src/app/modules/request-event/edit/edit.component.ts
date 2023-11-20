import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  colorControl = new FormControl('warn' as ThemePalette);
  urlControl = new FormControl('', [Validators.required, Validators.pattern(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/)]);
  error : boolean = false;
  error_message : string = 'Error al editar el evento';
  constructor(private route: ActivatedRoute, private http:HttpClient, private eventService: EventService, private router: Router) {}


  actualizarEvento: any = {
    idEvent: 0,
    name: '',
    date: '',
    ability: 0,
    description: '',
    type: '',
    city: null,
    url: '',
    direction: '',
    visibility: true,
    createdBy: '',
    logistic: null
   };

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        if (params['evento']) {
          this.actualizarEvento = JSON.parse(params['evento']);
        
        }

      });

      this.actualizarEvento.visibility = true;

      console.log(this.actualizarEvento)
  }

  isEditing: boolean = false;
  isEditingMode: boolean =false;
  isEditingModeActive: boolean = false;
  Validator: string = '';
  isURLValid: boolean = true;

  toggleEditMode(): void{
    this.isEditingMode = !this.isEditingMode;
    this.isEditingModeActive = this.isEditingMode;
  }

  editarEvento(): void{
   
    this.isEditing = true;

    if(this.isEditingMode){
      this.isEditingMode = false;
      this.isEditingModeActive = false;
      this.isEditing = false;
    } else {
      this.toggleEditMode();
    }

  }


  actualizaEvento(): void {
    console.log('Datos a enviar', this.actualizarEvento);
    this.isURLValid = true;

    if (!this.isURLValid) {
      alert('Por favor, corrija los errores en el formulario.');
      return;
    }
    if(this.Validator == 'Publico'){
      this.actualizarEvento.visibility = false;
    }
    else if(this.Validator == 'Privado'){
      this.actualizarEvento.visibility = true;
    }
    
    this.http.put(`${environment.backendAPI}/event/event/update/` + this.actualizarEvento.idEvent ,this.actualizarEvento).subscribe({
      next: (data: any) => {
        alert('Evento actualizado con éxito!');
        this.isEditing = false;
        this.router.navigate(['/hostEvent']);
      },
      error: (error: any) => {
        this.error = true;
        alert('Hubo un error al actualizar el evento. Detalles: ' + error.message);
        console.error('Detalles: ', error);
      }
    });
    
  }

  eliminarEvento(): void{
    this.http.delete(`${environment.backendAPI}/event/event/delete/` + this.actualizarEvento.idEvent).subscribe({
      next: (data: any) => {
        alert('Evento eliminado con éxito!');
        this.isEditing = false;
        this.router.navigate(["/hostEvent"]);
      },
      error: (error: any) => {
        this.error = true;
        alert('Hubo un error al eliminar el evento. Detalles: ' + error.message);
      }
    });
  }

  validateImageURL(): void {
    console.log('validando');
    this.isURLValid = this.urlControl.valid;
    console.log('Is URL valid? ', this.isURLValid);
  }

  getErrorMessage(){
    if (this.urlControl.hasError('required')) {
      return 'Debes ingresar una URL valida';
    }

    return this.urlControl.hasError('pattern') ? 'URL de imagen no válida' : '';
  }
}