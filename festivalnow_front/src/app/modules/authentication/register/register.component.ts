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
  error: boolean = false;
  error_message: string = 'Error de conexion';

  error_dict: {[key: number]: string} = {
    400: 'Hubo un error al crear el usuario, intente de nuevo',
    409: 'El usuario ya existe',
    500: 'Error del servidor',
  };

  registerObserver = {
    next: (data: any) => {
      console.log(data);
      this.router.navigate(['/login']);
    },
    error: (error: any) => {
      let code: number | undefined = error.status ? Math.round(error.status / 100) * 100 : undefined;
      code = error.status === 409 ? error.status : code;
      if (code && code in this.error_dict) {
        this.error_message = this.error_dict[code];
      }
      this.error = true;
    },
    complete: () => {
      console.log('complete');
    }
  }

  registrarse(): void {

    if (this.password !== this.confirmPassword) {
      return alert('Las contraseñas no coinciden');
    }
    if (this.username === '' || this.password === '' || this.email === '') {
      return alert('Los campos no pueden estar vacios');
    }

    this.user.username = this.username;
    this.user.password = this.password;
    this.user.email = this.email;

    this.auth.signup(this.user)
      .subscribe(this.registerObserver)
  }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }

}
