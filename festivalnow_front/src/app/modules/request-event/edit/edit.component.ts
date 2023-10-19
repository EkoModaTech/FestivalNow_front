import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private http:HttpClient) {}

  nuevoEvento: any = {

  };

  isURLValid: boolean = true;

  editarEvento(): void{
    this.validateImageURL();

    if (!this.isURLValid) {
      alert('Por favor, corrija los errores en el formulario.');
      return;
    }

    //this.http.post(`${environment.backendAPI}/event/event/`,this.).subscribe();
    
  }

  validateImageURL(): void {
    const urlPattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/;
    this.isURLValid = urlPattern.test(this.nuevoEvento.imagenURL);
  }
}
