import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss']
})
export class Game1Component {
  constructor(private router: Router){}

  startGame(){
    this.router.navigate(['/game/play']);
  }
}

