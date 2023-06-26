import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-game',
  templateUrl: './header-game.component.html',
  styleUrls: ['./header-game.component.scss']
})
export class HeaderGameComponent implements OnInit{
  time:string

  ngOnInit(): void {
    const currentTime = new Date();
    currentTime.setMinutes(0);
    currentTime.setSeconds(45);

    this.updateTime(currentTime);
  }

  updateTime(currentTime: Date): void {
    this.time = currentTime.toLocaleTimeString(navigator.language, {
      minute: '2-digit',
      second: '2-digit'
    });


    currentTime.setSeconds(currentTime.getSeconds() - 1);

    if (currentTime.getSeconds() > 0) {
      setTimeout(() => {
        this.updateTime(currentTime);
      }, 1000);
    }
    else{
      setTimeout(() => {
        this.time = "Time Over";
      }, 1000);
    }
  }
}