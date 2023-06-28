import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-game',
  templateUrl: './header-game.component.html',
  styleUrls: ['./header-game.component.scss']
})
export class HeaderGameComponent implements OnInit {
  stringTime:string;
  currentTime = new Date();
  gameStatus: boolean = false; 


  ngOnInit(): void {
    this.resetTime();
  }

  private resetTime(): void{
    this.currentTime.setMinutes(0);
    this.currentTime.setSeconds(45);
    this.dateToString();
  }

  public startTime(): void{
    this.gameStatus = true;
    this.resetTime();
    this.updateTime();
  }

  private updateTime(): void {
    if(this.gameStatus === true){
      this.dateToString();

      this.currentTime.setSeconds(this.currentTime.getSeconds() - 1);
  
      if (this.currentTime.getSeconds() > 0 || this.currentTime.getMinutes() > 0) {
        setTimeout(() => {
          this.updateTime();
        }, 1000);
      }
      else{
        setTimeout(() => {
          this.endGame();
        }, 1000);
      }
    }
  }
  public endGame():void{
    this.stringTime = "Time Over";
    this.gameStatus = false;
  }
  public addTime():void{
    this.currentTime.setSeconds(this.currentTime.getSeconds() + 2);
    this.dateToString();
  }
  public subTime():void{
    if(this.currentTime.getSeconds() > 5 || this.currentTime.getMinutes() > 0){
      this.currentTime.setSeconds(this.currentTime.getSeconds() - 5);
      this.dateToString();
    }
    else{
      this.endGame();
    }
  }

  private dateToString(): void{
    this.stringTime = this.currentTime.toLocaleTimeString(navigator.language, {
      minute: '2-digit',
      second: '2-digit'
    });
  }
}