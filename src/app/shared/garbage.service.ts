import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GarbageService {
  constructor() { }

  handleScroll() {
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const scrollThreshold = 80;

    const footer = document.querySelector('#footer') as HTMLElement;
    const garbageStack = document.querySelector('#garbage-stack') as HTMLElement;
    const imgscroll1 = document.querySelector('#img-scroll1') as HTMLElement;
    const imgscroll2 = document.querySelector('#img-scroll2') as HTMLElement;

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
