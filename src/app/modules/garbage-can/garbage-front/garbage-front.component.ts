import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from 'src/app/shared/color.service';

@Component({
  selector: 'app-garbage-front',
  templateUrl: './garbage-front.component.html',
  styleUrls: ['./garbage-front.component.scss'],
  providers: [ColorService]
})
export class GarbageFrontComponent implements OnInit{
  @Input() theme: string;
  currentTheme: any;
  
  constructor(private colorService: ColorService) {
  }

  ngOnInit() {
    this.currentTheme = this.colorService.theme[this.theme];
  }
}
