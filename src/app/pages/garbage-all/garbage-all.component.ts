import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-garbage-all',
  templateUrl: './garbage-all.component.html',
  styleUrls: ['./garbage-all.component.scss']
})
export class GarbageAllComponent implements OnInit{
  ngOnInit(): void {
    this.handleScroll();
  }
  @HostListener('window:scroll')
  handleScroll(){
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;


    //i will never fix this redundancy :D
    const footer = document.querySelector('#footer') as HTMLElement;
    const gs1 = document.querySelector('#gs1') as HTMLElement;
    const gsi1_1 = document.querySelector('#gsi1_1') as HTMLElement;
    const gsi1_2 = document.querySelector('#gsi1_2') as HTMLElement;

    const gs2 = document.querySelector('#gs2') as HTMLElement;
    const gsi2_1 = document.querySelector('#gsi2_1') as HTMLElement;
    const gsi2_2 = document.querySelector('#gsi2_2') as HTMLElement;

    const gs3 = document.querySelector('#gs3') as HTMLElement;
    const gsi3_1 = document.querySelector('#gsi3_1') as HTMLElement;
    const gsi3_2 = document.querySelector('#gsi3_2') as HTMLElement;

    const gs4 = document.querySelector('#gs4') as HTMLElement;
    const gsi4_1 = document.querySelector('#gsi4_1') as HTMLElement;
    const gsi4_2 = document.querySelector('#gsi4_2') as HTMLElement;

    if(scrollPercentage >= 80){
      footer.style.display = 'none';
    }
    else{
      footer.style.display = 'block';
    }

    this.moveGarbage(gs1, scrollPercentage);
    this.moveGarbage(gsi1_1, scrollPercentage * 0.98);
    this.moveGarbage(gsi1_2, scrollPercentage * 0.92);

    this.moveGarbage(gs2, scrollPercentage);
    this.moveGarbage(gsi2_1, scrollPercentage * 0.98);
    this.moveGarbage(gsi2_2, scrollPercentage * 0.92);

    this.moveGarbage(gs3, scrollPercentage);
    this.moveGarbage(gsi3_1, scrollPercentage * 0.98);
    this.moveGarbage(gsi3_2, scrollPercentage * 0.92);

    this.moveGarbage(gs4, scrollPercentage);
    this.moveGarbage(gsi4_1, scrollPercentage * 0.98);
    this.moveGarbage(gsi4_2, scrollPercentage * 0.92);
  }

  moveGarbage(garbage: HTMLElement, scrollPercentage: number) {
    const factor = 21; //starting position x
    const xMove = (-factor*Math.pow(scrollPercentage,4) / (Math.pow(scrollPercentage,4) + Math.pow(factor,4.4 /* how fast it goes to the middle */))) + factor;
    const yMove = garbage.id.includes('_') ? (scrollPercentage * 45) / 100 : (scrollPercentage * 60) / 100;
    
    const rotate = Math.pow(2,0.12 * scrollPercentage);

    if(garbage.id.includes('_1')){
      this.transformGarbage(garbage, yMove, xMove, -rotate);
    }
    else if(garbage.id.includes('_2')){
      this.transformGarbage(garbage, yMove, -xMove, rotate);
    }
    else {
      this.transformGarbage(garbage, yMove);
    }
  }

  transformGarbage(garbage:HTMLElement, yMove: number, xMove: number = 0, rotate:number = 0){
    garbage.style.transform = `translate(${xMove}vw, ${yMove}vh) rotate(${rotate}deg)`;
  }
}
