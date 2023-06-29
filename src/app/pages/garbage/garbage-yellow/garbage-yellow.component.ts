import { Component, HostListener, OnInit } from '@angular/core';
import { GarbageService } from '../../../shared/garbage.service';

@Component({
  selector: 'app-garbage-yellow',
  templateUrl: './garbage-yellow.component.html',
  styleUrls: ['./garbage-yellow.component.scss'],
  providers: [GarbageService]
})
export class GarbageYellowComponent implements OnInit{
  constructor(private garbageService: GarbageService) {}
  ngOnInit(): void {
    this.handleScroll();
  }
  @HostListener('window:scroll')
  handleScroll() {
    this.garbageService.handleScroll();
  }
}
