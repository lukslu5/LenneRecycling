import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-game',
  templateUrl: './footer-game.component.html',
  styleUrls: ['./footer-game.component.scss']
})
export class FooterGameComponent {
  score: number = 0;

  public addScore(){
    this.score++;
  }

  public subScore(){
    if(this.score > 0){
      this.score--;
    }
  }
}
