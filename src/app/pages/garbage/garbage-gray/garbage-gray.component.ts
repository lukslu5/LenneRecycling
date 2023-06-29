import { Component, HostListener, OnInit } from '@angular/core';
import { GarbageService } from '../../../shared/garbage.service';

@Component({
  selector: 'app-garbage-gray',
  templateUrl: './garbage-gray.component.html',
  styleUrls: ['./garbage-gray.component.scss'],
  providers: [GarbageService]
})
export class GarbageGrayComponent implements OnInit{
  constructor(private garbageService: GarbageService) {}

  ngOnInit(): void {
    this.handleScroll();
  }
  @HostListener('window:scroll')
  handleScroll() {
    this.garbageService.handleScroll();
  }
}
