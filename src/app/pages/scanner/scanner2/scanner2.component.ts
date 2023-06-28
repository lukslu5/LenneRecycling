import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/shared/scanner.service';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-scanner2',
  templateUrl: './scanner2.component.html',
  styleUrls: ['./scanner2.component.scss'],
})
export class Scanner2Component implements OnInit {
  capturedImage: any;

  products: Product[];
  productPacks: any[] = [];
  productInstructions: any[] = []

  constructor(
    private productService: ProductService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.products;
    this.capturedImage = this.imageService.capturedImage;

    for(let i = 0;i < this.products.length;i++){
      this.productPacks[i] = this.productService.getPackaging(Number(this.products[i].pack));
      this.productInstructions[i] = this.makeInstructions(this.productPacks[i])
    }
  }

  makeInstructions(packagings: any[]): string {
    let packagingInstructions: string = "";
    if(packagings[0]){
      for(let k = 0; k < packagings.length;k++){
        const packaging = packagings[k];
        
        switch(packaging){
          case 'Plastikverpackung':
            packagingInstructions += "Entsorge den Müll in die Plastikmülltonne.\n";
            break;
          case 'Verbundmaterialverpackung': 
            packagingInstructions += "Entsorge den Müll in die Verbundstoffmülltonne.\n";
            break;
          case 'Papier/Pappeverpackung':
            packagingInstructions += "Entsorge den Müll in die Altpapiermülltonne.\n";
            break;
          case 'Glas/Keramik/Tonverpackung':
            packagingInstructions += "Entsorge den Müll in die Glascontainer.\n";
            break;
          case 'Metallverpackung':
            packagingInstructions += "Entsorge den Müll in die Metallmülltonne.\n";
            break;
          case 'unverpackt':
            packagingInstructions += "Der Müll ist unverpackt und kann direkt entsorgt werden.\n";
            break;
          case 'plastikfreie Verpackung':
            packagingInstructions += "Entsorge den Müll in plastikfreien Behältern.\n";
            break;
          case 'übertrieben stark verpackt':
            packagingInstructions += "Der Müll ist übertrieben stark verpackt. Trenne die Verpackungsmaterialien und entsorge sie entsprechend.\n";
            break;
          case 'angemessen sparsam verpackt':
            packagingInstructions += "Der Müll ist angemessen sparsam verpackt. Entsorge ihn entsprechend.\n";
            break;
          case 'Pfandsystem / Mehrwegverpackung':
            packagingInstructions += "Der Müll ist Teil eines Pfandsystems oder einer Mehrwegverpackung. Entsorge ihn entsprechend.\n";
            break;
        }
      }
    }
    else{
      packagingInstructions += "Es sind keine Verpackungsinformationen vorhanden"
    }
    
    return packagingInstructions;
  }
}
