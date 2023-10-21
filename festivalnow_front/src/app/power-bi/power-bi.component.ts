import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from '../shared/service/auth.service';
@Component({
  selector: 'app-power-bi',
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.css']
})
export class PowerBIComponent implements OnInit{
  iframeSrc: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer, public auth: AuthService) { }

  ngOnInit(): void {
    const token = this.auth.token;
    const unsafeUrl = `https://app.powerbi.com/view?r=${token}`;
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }
}
