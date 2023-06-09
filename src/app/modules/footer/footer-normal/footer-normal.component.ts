import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer-normal.component.html',
  styleUrls: ['./footer-normal.component.scss']
})
export class FooterComponent {
  constructor(private router: Router) { }

  isInRoute(route: string): boolean {
    return this.router.url.startsWith(`/${route}`);
  }
}
