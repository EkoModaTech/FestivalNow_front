import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private router: Router, private userService: UserService) { }

  showEditPassword = false

  username = ''
  user_email = ''
  user_role = ''
  newPassword = ''

  role_dict = [
    "EMPLOYEE",
    "ADMIN",
    "HOST",
    "CLIENT"
  ]

  ngOnInit(): void {
    if (localStorage.getItem('usuario')) {
      var decoded_token = JSON.parse(localStorage.getItem('usuario')!)
      this.username = decoded_token.username
      this.user_email = decoded_token.email
      var roles = decoded_token.roles;
      var indice = this.obtenerIndiceComun(this.role_dict, roles).indiceEnB
      this.user_role = roles[indice];
    }
    else {
      // Redirige a página de inicio de sesión
      this.router.navigate(['login']);
    }
  }

  submitNewPassword(): void {

    let newPasswordObj = {
      "newPassword": this.newPassword
    }

    this.userService.updateUserPassword(newPasswordObj)
    .subscribe(u => {
        console.log(u)
      }
    )
    
    // TODO: Show message alert ('Password has been updated').

    this.newPassword = ''
    this.showEditPassword = false

  }

  obtenerIndiceComun(role_dict: String[], roles: String[]): any {
    for (let i = 0; i < role_dict.length; i++) {
      let elementoA = role_dict[i];  
      let indiceEnB = roles.indexOf(elementoA);
      if (indiceEnB !== -1) {
        return { elemento: elementoA, indiceEnA: i, indiceEnB: indiceEnB };
      }
    }
    return null;
  }
}
