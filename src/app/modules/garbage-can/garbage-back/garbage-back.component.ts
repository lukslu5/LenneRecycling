import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from 'src/app/shared/color.service';

@Component({
  selector: 'app-garbage-back',
  templateUrl: './garbage-back.component.html',
  styleUrls: ['./garbage-back.component.scss'],
  providers: [ColorService]
})
export class GarbageBackComponent implements OnInit{
  @Input() theme: string;
  currentTheme: any;
  
  constructor(private colorService: ColorService) {
  }

  ngOnInit() {
    this.currentTheme = this.colorService.theme[this.theme];
  }
}
