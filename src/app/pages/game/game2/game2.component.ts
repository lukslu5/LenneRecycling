import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterGameComponent } from 'src/app/modules/footer/footer-game/footer-game.component';
import { HeaderGameComponent } from 'src/app/modules/header/header-game/header-game.component';
import { ItemService } from 'src/app/shared/item.service';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.scss'],
  providers: [ItemService]
})
export class Game2Component implements OnInit{
  @ViewChild(HeaderGameComponent) header: HeaderGameComponent;
  @ViewChild(FooterGameComponent) footer: FooterGameComponent;
  garbageSelector: any;
  commonPath = '../../../assets/Garbage/';

  addAnimation : boolean = false;
  subAnimation: boolean = false;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.randomItem();
  }

  onDrag() {
    if(this.header.gameStatus === false){
      this.footer.score = 0;
      this.header.startTime();
    }
  }

  onDrop(garbageCan: string) {

    if(this.garbageSelector.garbage === garbageCan){
      this.footer.addScore();
      this.header.addTime();
      this.addAnimation = true;
      setTimeout(() => {this.addAnimation = false},350)
    }
    else{
      this.footer.subScore();
      this.header.subTime();
      this.subAnimation = true;
      setTimeout(() => {this.subAnimation = false},350)
    }
    this.randomItem();
  }

  randomItem() {
    this.garbageSelector = this.itemService.items[Math.floor(Math.random() * (this.itemService.items.length))];
    this.garbageSelector.src = this.commonPath + this.garbageSelector.src;
  }
  
}
