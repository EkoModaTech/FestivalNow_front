import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor() {}

  username: string = '';
  password: string = '';

  iniciarSesion(): void {
    console.log(this.username)
    console.log(this.password)
  }
}
