import { Component } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private router: Router) { }

  isInMenuRoute(): boolean {
    return this.router.url.startsWith('/menu');
  }
}
