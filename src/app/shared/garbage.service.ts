import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GarbageService {
  constructor() { 
  }
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
    this.moveGarbage(imgscroll2, scrollPercentage * 0.9, false);

    if (scrollPercentage >= scrollThreshold) {
      footer.style.display = 'none';
    } else {
      footer.style.display = 'block';
    }
  }

  moveGarbage(garbage: HTMLElement, scrollPercentage: number, garbageCan: boolean) {
    console.log(garbage.id);

    if (garbageCan === false) {

      const xmidScreen = document.documentElement.clientWidth / 2;
      const GarbagexPos = garbage.offsetLeft + garbage.offsetWidth / 4;

      if(GarbagexPos > xmidScreen){
        garbage.style.transform = `translate(${(1 / scrollPercentage) * 100}vw, ${(scrollPercentage * 55) / 100}vh) rotate(-${Math.pow(2,0.12 * scrollPercentage)}deg)`;
      }
      else if(GarbagexPos < xmidScreen){
        garbage.style.transform = `translate(-${(1 / scrollPercentage) * 100}vw, ${(scrollPercentage * 55) / 100}vh) rotate(${Math.pow(2,0.12 * scrollPercentage)}deg)`;
      }

    } else {
      garbage.style.transform = `translateY(${(scrollPercentage * 65) / 100}vh)`;
    }
  }
}
