import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { RegisterRequest } from 'src/app/models/auth/register.request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  user:RegisterRequest = new RegisterRequest
  successMessageVisible: boolean = false

  constructor(private auth: AuthService, private router: Router) {}

  username: string = '';
  password: string = '';
  email: string = '';

  registrarse(): void {

    this.user.username = this.username;
    this.user.password = this.password;
    this.user.email = this.email;

    this.auth.signup(this.user)
      .subscribe(_ => {
        this.successMessageVisible = true;
        this.router.navigate(['/login']);
      })
  }

}
