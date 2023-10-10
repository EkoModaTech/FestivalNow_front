import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) { }

  username: string = '';
  password: string = '';


  iniciarSesion(): void {
    this.auth.login(this.username, this.password)
      .subscribe(u => {
          this.router.navigate(["/home"])
        }
      )
  }
}
