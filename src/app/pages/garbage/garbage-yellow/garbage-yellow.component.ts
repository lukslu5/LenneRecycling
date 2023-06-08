import { Component, HostListener, ElementRef } from '@angular/core';
import { GarbageService } from '../../../shared/garbage.service';

@Component({
  selector: 'app-garbage-yellow',
  templateUrl: './garbage-yellow.component.html',
  styleUrls: ['./garbage-yellow.component.scss'],
  providers: [GarbageService]
})
export class GarbageYellowComponent {
  constructor(private elementRef: ElementRef, private garbageService: GarbageService) {}

  @HostListener('window:scroll')
  handleScroll() {
    this.garbageService.handleScroll();
  }
}
