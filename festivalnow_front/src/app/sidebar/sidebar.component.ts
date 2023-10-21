import { Component } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public auth: AuthService) {}
}
