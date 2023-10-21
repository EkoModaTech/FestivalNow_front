import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userRoles: string[] = [];

  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.userRoles = this.auth.getUserRoles();
  }
}
