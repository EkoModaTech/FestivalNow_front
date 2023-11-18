import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  colorControl = new FormControl('warn' as ThemePalette);
  constructor(private route: ActivatedRoute, private http:HttpClient) {}

  actualizarEvento: any = {
    idEvent: 0,
    name: '',
    date: '',
    ability: 0,
    description: '',
    type: '',
    city: {
      idCity: 1
    },
    imagenURL: ''
   };

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        if (params['evento']) {
          this.actualizarEvento = JSON.parse(params['evento']);
        
        }

      });

      console.log(this.actualizarEvento)
  }

  isEditing: boolean = false;
  isEditingMode: boolean =false;
  isEditingModeActive: boolean = false;
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
    this.validateImageURL();

    if (!this.isURLValid) {
      alert('Por favor, corrija los errores en el formulario.');
      return;
    }
    
    this.http.put(`${environment.backendAPI}/event/event/update`,this.actualizarEvento).subscribe(
      (response)=>{
        console.log(response);
        alert('Evento actualizado')
      },
      error => {
        console.error(error);
        alert('Hubo un error al actualizar un evento. Detalles: '+ error.message);
      }
    );
  }

  validateImageURL(): void {
    const urlPattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/;
    this.isURLValid = urlPattern.test(this.actualizarEvento.imagenURL);
  }
}