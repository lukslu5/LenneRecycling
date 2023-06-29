import { Component, HostListener, OnInit } from '@angular/core';
import { GarbageService } from 'src/app/shared/garbage.service';

@Component({
  selector: 'app-garbage-brown',
  templateUrl: './garbage-brown.component.html',
  styleUrls: ['./garbage-brown.component.scss'],
  providers: [GarbageService]
})
export class GarbageBrownComponent implements OnInit{
  constructor(private garbageService: GarbageService) {}
  ngOnInit(): void {
    this.handleScroll();
  }
  @HostListener('window:scroll')
  handleScroll() {
    this.garbageService.handleScroll();
  }
}
