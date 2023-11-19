import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {

  constructor(private router: Router) {}

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }
}
