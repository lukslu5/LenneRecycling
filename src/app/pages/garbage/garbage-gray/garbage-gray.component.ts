import { Component, HostListener, ElementRef } from '@angular/core';
import { GarbageService } from '../../../shared/garbage.service';

@Component({
  selector: 'app-garbage-gray',
  templateUrl: './garbage-gray.component.html',
  styleUrls: ['./garbage-gray.component.scss'],
  providers: [GarbageService]
})
export class GarbageGrayComponent {
  constructor(private elementRef: ElementRef, private garbageService: GarbageService) {}

  @HostListener('window:scroll')
  handleScroll() {
    this.garbageService.handleScroll();
  }
}
