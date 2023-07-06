import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash1',
  templateUrl:  './splash1.component.html',
  styleUrls:[   './splash1.component.scss']
})
export class Splash1Component {
  constructor(private router: Router){}
  path: string = "../../../assets/Icons/Recycle_Logo.png"

  ngOnInit() {
    setTimeout(() => {this.router.navigate(['/disclaimer']);}, 1000);
  }
}
