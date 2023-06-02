import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash2',
  templateUrl:  './splash2.component.html',
  styleUrls:[   './splash2.component.scss',]
})
export class Splash2Component {
  constructor(private router: Router){}
  path: string = "../../../assets/Icons/Warning_Logo.png"

  ngOnInit() {
    setTimeout(() => {this.router.navigate(['/menu/brown']);}, 2500);
  }
}
