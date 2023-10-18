import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private router: Router) { }

  username = ''
  user_email = ''

  ngOnInit(): void {
    if (localStorage.getItem('usuario')) {
      this.username = JSON.parse(localStorage.getItem('usuario')!).username
      this.user_email = JSON.parse(localStorage.getItem('usuario')!).email
    }
    else {
      // Redirige a página de inicio de sesión
      this.router.navigate(['login']);
    }
  }
}
