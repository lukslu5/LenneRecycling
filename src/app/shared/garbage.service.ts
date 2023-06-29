export class GarbageService {

  handleScroll() {
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    const footer = document.querySelector('#footer') as HTMLElement;
    const garbageStack = document.querySelector('#garbage-stack') as HTMLElement;
    const imgscroll1 = document.querySelector('#img-scroll1') as HTMLElement;
    const imgscroll2 = document.querySelector('#img-scroll2') as HTMLElement;

    if(scrollPercentage >= 80){
      footer.style.display = 'none';
    }
    else{
      footer.style.display = 'block';
    }

    this.moveGarbage(garbageStack, scrollPercentage);
    this.moveGarbage(imgscroll1, scrollPercentage * 0.98);
    this.moveGarbage(imgscroll2, scrollPercentage * 0.92);

  }

  moveGarbage(garbage: HTMLElement, scrollPercentage: number) {
    const factor = 21; //starting position x
    const xMove = (-factor*Math.pow(scrollPercentage,4) / (Math.pow(scrollPercentage,4) + Math.pow(factor,4.4 /* how fast it goes to the middle */))) + factor;
    const yMove = garbage.id === 'garbage-stack' ? (scrollPercentage * 65) / 100 : (scrollPercentage * 45) / 100;
    console.log(`${garbage.id} : yMove=${yMove}`)
    
    const rotate = Math.pow(2,0.12 * scrollPercentage);

    if(garbage.id === 'img-scroll1'){
      this.transformGarbage(garbage, yMove, xMove, -rotate);
    }
    else if(garbage.id === 'img-scroll2'){
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
