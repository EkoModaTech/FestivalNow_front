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

  constructor(private auth: AuthService, private router: Router) {}

  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  email: string = '';

  registrarse(): void {

    if (this.password !== this.confirmPassword) {
      return;
    }

    this.user.username = this.username;
    this.user.password = this.password;
    this.user.email = this.email;

    this.auth.signup(this.user)
      .subscribe(_ => {
        this.router.navigate(['/login']);
      })
  }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }

}
