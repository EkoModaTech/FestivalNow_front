import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor() {}

  username: string = '';
  password: string = '';

  registrarse(): void {
    console.log(this.username)
    console.log(this.password)
  }

}
