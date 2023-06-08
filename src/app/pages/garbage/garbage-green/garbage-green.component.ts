import { Component, HostListener, ElementRef } from '@angular/core';
import { GarbageService } from '../../../shared/garbage.service';

@Component({
  selector: 'app-garbage-green',
  templateUrl: './garbage-green.component.html',
  styleUrls: ['./garbage-green.component.scss'],
  providers: [GarbageService]
})
export class GarbageGreenComponent {
  constructor(private elementRef: ElementRef, private garbageService: GarbageService) {}

  @HostListener('window:scroll')
  handleScroll() {
    this.garbageService.handleScroll();
  }
}
