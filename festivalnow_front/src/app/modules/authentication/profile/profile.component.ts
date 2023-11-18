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

  ngOnInit(): void {
    if (localStorage.getItem('usuario')) {
      var decoded_token = JSON.parse(localStorage.getItem('usuario')!)
      this.username = decoded_token.username
      this.user_email = decoded_token.email
      var roles = decoded_token.roles;
      this.user_role = roles[roles.length - 1];
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
}
