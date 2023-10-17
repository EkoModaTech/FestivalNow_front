import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarOpen = true;
  title = 'festivalnow_front';
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verificar si la ruta actual es "/login", "/register" o "/recover"
        this.isSpecialPage();
      }
    });
  }

  isSpecialPage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/login' || currentUrl === '/register' || currentUrl === '/recover';
  }

  sideBarToggler(event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}