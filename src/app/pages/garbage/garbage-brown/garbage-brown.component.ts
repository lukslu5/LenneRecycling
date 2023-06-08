import { Component, HostListener, ElementRef } from '@angular/core';
import { GarbageService } from '../../../shared/garbage.service';

@Component({
  selector: 'app-garbage-brown',
  templateUrl: './garbage-brown.component.html',
  styleUrls: ['./garbage-brown.component.scss'],
  providers: [GarbageService]
})
export class GarbageBrownComponent {
  constructor(private elementRef: ElementRef, private garbageService: GarbageService) {}

  @HostListener('window:scroll')
  handleScroll() {
    this.garbageService.handleScroll();
  }
}
