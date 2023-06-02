import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-current-page',
  templateUrl: './current-page.component.html',
  styleUrls: ['./current-page.component.scss']
})
export class CurrentPageComponent {
  constructor(private router: Router) { }

  pathSmall: string = "../../assets/Icons/Circle_S.svg"
  pathBig: string = "../../assets/Icons/Circle_B.svg"
  
  getPaths() {
    let paths: string[] = []

    const urlMap = {
      brown: 0,
      green: 1,
      gray: 2,
      yellow: 3
    };
  
    const changeIndex = urlMap[this.router.url.split('/').pop()];
    paths = Array(4).fill(this.pathSmall);
  
    if (changeIndex !== undefined) {
      paths[changeIndex] = this.pathBig;
    }

    return paths;
  }
  
}
