import { Component, Input } from '@angular/core';
import { ColorService } from 'src/app/shared/color.service';

@Component({
  selector: 'app-garbage-extra',
  templateUrl: './garbage-extra.component.html',
  styleUrls: ['./garbage-extra.component.scss'],
  providers: [ColorService]
})
export class GarbageExtraComponent {
  @Input() theme: string;
  currentTheme: any;
  
  constructor(private colorService: ColorService) {
  }

  ngOnInit() {
    this.currentTheme = this.colorService.theme[this.theme];
  }
}
