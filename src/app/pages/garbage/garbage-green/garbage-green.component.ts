import { Component, HostListener, OnInit } from '@angular/core';
import { GarbageService } from '../../../shared/garbage.service';

@Component({
  selector: 'app-garbage-green',
  templateUrl: './garbage-green.component.html',
  styleUrls: ['./garbage-green.component.scss'],
  providers: [GarbageService]
})
export class GarbageGreenComponent implements OnInit{
  constructor( private garbageService: GarbageService) {}
  ngOnInit(): void {
    this.handleScroll();
  }
  @HostListener('window:scroll')
  handleScroll() {
    this.garbageService.handleScroll();
  }
}
