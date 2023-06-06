import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-garbage-brown',
  templateUrl: './garbage-brown.component.html',
  styleUrls: [
    './garbage-brown.component.scss'
]
})
export class GarbageBrownComponent {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.handleScroll();
  }

  @HostListener('window:scroll')
  handleScroll() {
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const scrollThreshold = 80;

    const footer = this.elementRef.nativeElement.querySelector('#footer');
    const garbageStack = this.elementRef.nativeElement.querySelector('#garbage-stack');
    const imgscroll1 = this.elementRef.nativeElement.querySelector('#img-scroll1');
    const imgscroll2 = this.elementRef.nativeElement.querySelector('#img-scroll2');

    this.moveGarbage(garbageStack, scrollPercentage, true);
    this.moveGarbage(imgscroll1, scrollPercentage * 0.8, false);
    //this.moveGarbage(imgscroll2, scrollPercentage * 0.82, false);

    if (scrollPercentage >= scrollThreshold) {
      footer.style.display = 'none';
    } else {
      footer.style.display = 'block';
    }
  }

  moveGarbage(garbage: HTMLElement, scrollPercentage: number, garbageCan: boolean) {
    if (garbageCan === false) {
       const rotationAngle = 0;
       const translateX = 0;
  
      garbage.style.transform = `translate(${translateX}px, ${(scrollPercentage * 65) / 100}vh) rotate(${rotationAngle}deg)`;
    } else {
      garbage.style.transform = `translateY(${(scrollPercentage * 65) / 100}vh)`;
    }
  }
}